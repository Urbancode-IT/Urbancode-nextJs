import axios from 'axios';
import { getAllTopics as getLocalTopics, getQuizByTopicAndLevel as getLocalQuiz } from '../data/quizData';
import { problemsData as getLocalProblemsData } from '../data/problemsData';

/** Log fallback / network noise only when explicitly debugging */
export const debugCompilerApi = () =>
    typeof process !== 'undefined' && process.env.NEXT_PUBLIC_DEBUG_COMPILER_API === 'true';

/**
 * When false, problems/quizzes/progress skip HTTP entirely (no 503/429 spam in dev).
 * Default: off on localhost; on for other hosts. Force with NEXT_PUBLIC_COMPILER_USE_REMOTE=true / SKIP_REMOTE.
 */
export function shouldUseRemoteCompilerBackend() {
    if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_COMPILER_USE_REMOTE === 'true') {
        return true;
    }
    if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_COMPILER_SKIP_REMOTE === 'true') {
        return false;
    }
    if (typeof window === 'undefined') {
        return true;
    }
    const h = window.location.hostname;
    const localHost =
        h === 'localhost' || h === '127.0.0.1' || h === '[::1]' || h === '::1';
    return !localHost;
}

const PROGRESS_LS = 'uc_compiler_progress_v1';

function readProgressBucket(userId, topic) {
    if (typeof window === 'undefined') return { byProblemId: {}, solvedIds: [] };
    try {
        const raw = window.localStorage.getItem(`${PROGRESS_LS}_${userId}_${topic}`);
        if (!raw) return { byProblemId: {}, solvedIds: [] };
        const o = JSON.parse(raw);
        return {
            byProblemId: o.byProblemId && typeof o.byProblemId === 'object' ? o.byProblemId : {},
            solvedIds: Array.isArray(o.solvedIds) ? o.solvedIds.map(String) : []
        };
    } catch {
        return { byProblemId: {}, solvedIds: [] };
    }
}

function writeProgressBucket(userId, topic, bucket) {
    if (typeof window === 'undefined') return;
    try {
        window.localStorage.setItem(`${PROGRESS_LS}_${userId}_${topic}`, JSON.stringify(bucket));
    } catch { /* quota */ }
}

function findLocalProblem(id, topicHint) {
    const normalizedTopic = typeof topicHint === 'string' ? topicHint.toLowerCase() : null;
    const findIn = (topicKey) => {
        const bucket = getLocalProblemsData[topicKey];
        if (!bucket?.problems) return null;
        return bucket.problems.find(
            (p) =>
                p.id.toString() === id.toString() ||
                p._id === id ||
                (p._id != null && String(p._id) === String(id))
        );
    };
    if (normalizedTopic) {
        const found = findIn(normalizedTopic);
        if (found) return found;
    }
    for (const topic of Object.keys(getLocalProblemsData)) {
        const found = findIn(topic);
        if (found) return found;
    }
    return null;
}

/**
 * Base URL for the compiler REST API.
 * In the browser, requests use the Next.js rewrite at `/compiler-remote-api/*` (see next.config.mjs) so
 * traffic is same-origin and the browser does not apply CORS to Render. Server-side code uses Render directly.
 * Override with NEXT_PUBLIC_API_URL if needed.
 */
function getApiBaseUrl() {
    if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL) {
        return String(process.env.NEXT_PUBLIC_API_URL).replace(/\/$/, '');
    }
    if (typeof window !== 'undefined') {
        return `${window.location.origin}/compiler-remote-api`;
    }
    return 'https://urbancode-nextjs.onrender.com/api';
}

const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    config.baseURL = getApiBaseUrl();
    return config;
});

// Fallback topics shown when the backend/DB is unavailable
const FALLBACK_TOPICS = [
    { id: 'python', totalProblems: 0, title: 'Python Problems' },
    { id: 'sql', totalProblems: 0, title: 'SQL Problems' },
    { id: 'javascript', totalProblems: 0, title: 'Javascript Problems' },
    { id: 'css', totalProblems: 0, title: 'CSS Problems' },
    { id: 'react', totalProblems: 0, title: 'React Problems' },
    { id: 'html', totalProblems: 0, title: 'HTML Problems' },
    { id: 'java', totalProblems: 0, title: 'Java Problems' },
    { id: 'c++', totalProblems: 0, title: 'C++ Problems' },
    { id: 'angular', totalProblems: 0, title: 'Angular Problems' },
];

// Problems API
export const problemsApi = {
    getAllTopics: async () => {
        if (!shouldUseRemoteCompilerBackend()) {
            const keys = Object.keys(getLocalProblemsData);
            const data = keys.map((id) => {
                const t = getLocalProblemsData[id];
                return {
                    id,
                    totalProblems: t.problems?.length ?? 0,
                    title: t.title || `${id} Problems`
                };
            });
            return { success: true, data: data.length ? data : FALLBACK_TOPICS };
        }
        try {
            const response = await api.get('/problems/topics/summary');
            return response.data;
        } catch (err) {
            if (debugCompilerApi()) console.warn('Backend unavailable, using fallback topics.', err?.message);
            return { success: true, data: FALLBACK_TOPICS };
        }
    },
    getProblemsByTopic: async (topic) => {
        if (!shouldUseRemoteCompilerBackend()) {
            const normalized = typeof topic === 'string' ? topic.toLowerCase() : topic;
            const localTopicData = normalized ? getLocalProblemsData[normalized] : undefined;
            const problems = localTopicData ? localTopicData.problems : [];
            return {
                success: true,
                topic: normalized || topic,
                data: problems,
                count: problems.length
            };
        }
        try {
            const response = await api.get(`/problems/topic/${encodeURIComponent(topic)}`);
            if (response.data && response.data.success && response.data.data?.length > 0) {
                return response.data;
            }
            throw new Error('No data from backend');
        } catch (err) {
            if (debugCompilerApi()) console.warn(`Backend unavailable for topic ${topic}, using local data.`, err?.message);
            const normalized = typeof topic === 'string' ? topic.toLowerCase() : topic;
            const localTopicData = normalized ? getLocalProblemsData[normalized] : undefined;
            const problems = localTopicData ? localTopicData.problems : [];
            return {
                success: true,
                topic: normalized || topic,
                data: problems,
                count: problems.length
            };
        }
    },
    getProblemById: async (id, topicHint) => {
        if (!shouldUseRemoteCompilerBackend()) {
            const localProb = findLocalProblem(id, topicHint);
            return localProb
                ? { success: true, data: localProb }
                : { success: false, message: 'Problem not found' };
        }
        try {
            const response = await api.get(`/problems/${id}`);
            if (response.data && response.data.success) {
                // If backend problem doesn't have theory, try to find it in local data by ID or TITLE
                if (!response.data.data.theory) {
                    const backendTitle = response.data.data.title;
                    for (const topic in getLocalProblemsData) {
                        const localProb = getLocalProblemsData[topic].problems.find(p =>
                            p.id.toString() === id.toString() ||
                            p._id === id ||
                            (backendTitle && p.title.toLowerCase() === backendTitle.toLowerCase())
                        );
                        if (localProb && localProb.theory) {
                            response.data.data.theory = localProb.theory;
                            break;
                        }
                    }
                }
                return response.data;
            }
            throw new Error('Failed to get problem from backend');
        } catch (err) {
            if (debugCompilerApi()) console.warn(`Backend unavailable for problem ${id}, using local fallback.`, err?.message);
            const localProb = findLocalProblem(id, topicHint);
            return localProb
                ? { success: true, data: localProb }
                : { success: false, message: 'Problem not found' };
        }
    },
    createProblem: async (problemData) => {
        const response = await api.post('/problems', problemData);
        return response.data;
    },
    updateProblem: async (id, problemData) => {
        const response = await api.put(`/problems/${id}`, problemData);
        return response.data;
    },
    deleteProblem: async (id) => {
        const response = await api.delete(`/problems/${id}`);
        return response.data;
    },
    clearAllProblems: async () => {
        const response = await api.delete('/problems/clear/all');
        return response.data;
    }
};

// Quizzes API
export const quizzesApi = {
    getAllTopics: async () => {
        if (!shouldUseRemoteCompilerBackend()) {
            return { success: true, data: getLocalTopics() };
        }
        let backendTopics = [];
        try {
            const response = await api.get('/quizzes/topics');
            if (response.data && response.data.success) {
                backendTopics = response.data.data;
            }
        } catch (err) {
            if (debugCompilerApi()) console.warn('Backend unavailable fetching quiz topics, using local data.', err?.message);
        }

        const localTopics = getLocalTopics();
        const merged = [...localTopics];

        backendTopics.forEach(bt => {
            const index = merged.findIndex(lt => lt.id === bt.id);
            if (index !== -1) {
                // Use the higher count to ensure accuracy, but prioritize local metadata if backend is lacking
                merged[index] = {
                    ...merged[index],
                    ...bt,
                    questionCount: Math.max(merged[index].questionCount, bt.questionCount || 0)
                };
            } else {
                merged.push(bt);
            }
        });

        return { success: true, data: merged };
    },
    getQuizByTopicAndLevel: async (topic, level) => {
        if (!shouldUseRemoteCompilerBackend()) {
            const localData = getLocalQuiz(topic, level);
            return {
                success: true,
                data: localData || { topic, level, questions: [], title: topic, icon: '❓' }
            };
        }
        try {
            const response = await api.get(`/quizzes/${encodeURIComponent(topic)}/${encodeURIComponent(level)}`);
            if (response.data && response.data.success && response.data.data?.questions?.length >= 5) {
                return response.data;
            }
            throw new Error('Insufficient questions from backend (less than 5)');
        } catch (err) {
            if (debugCompilerApi()) console.warn('Backend unavailable, using local quiz.', err?.message);
            const localData = getLocalQuiz(topic, level);
            return {
                success: true,
                data: localData || { topic, level, questions: [], title: topic, icon: '❓' }
            };
        }
    }
};

// Progress API (never throw — backend may be down, CORS, or rate-limited)
export const progressApi = {
    getUserProgress: async (userId, topic) => {
        if (!shouldUseRemoteCompilerBackend()) {
            const bucket = readProgressBucket(userId, topic);
            const allIds = new Set([
                ...bucket.solvedIds,
                ...Object.keys(bucket.byProblemId)
            ]);
            const data = [...allIds].map((pid) => {
                const row = bucket.byProblemId[pid] || {};
                return {
                    problemId: pid,
                    savedCode: row.savedCode,
                    isSolved: Boolean(row.isSolved) || bucket.solvedIds.includes(pid)
                };
            });
            return { success: true, data };
        }
        try {
            const response = await api.get(`/progress/${userId}/${topic}`);
            return response.data;
        } catch (err) {
            if (debugCompilerApi()) console.warn('Progress list unavailable.', err?.message || err);
            return { success: false, data: [] };
        }
    },
    saveUserCode: async (data) => {
        if (!shouldUseRemoteCompilerBackend()) {
            const { userId, topic, problemId, savedCode } = data;
            const bucket = readProgressBucket(userId, topic);
            const pid = String(problemId);
            if (!bucket.byProblemId[pid]) bucket.byProblemId[pid] = {};
            bucket.byProblemId[pid].savedCode = savedCode;
            writeProgressBucket(userId, topic, bucket);
            return { success: true };
        }
        try {
            const response = await api.post('/progress/save-code', data);
            return response.data;
        } catch (err) {
            if (debugCompilerApi()) console.warn('Could not save code to server.', err?.message || err);
            return { success: false };
        }
    },
    markProblemSolved: async (data) => {
        if (!shouldUseRemoteCompilerBackend()) {
            const { userId, topic, problemId } = data;
            const bucket = readProgressBucket(userId, topic);
            const pid = String(problemId);
            if (!bucket.solvedIds.includes(pid)) bucket.solvedIds.push(pid);
            if (!bucket.byProblemId[pid]) bucket.byProblemId[pid] = {};
            bucket.byProblemId[pid].isSolved = true;
            writeProgressBucket(userId, topic, bucket);
            return { success: true };
        }
        try {
            const response = await api.post('/progress/mark-solved', data);
            return response.data;
        } catch (err) {
            if (debugCompilerApi()) console.warn('Could not mark problem solved on server.', err?.message || err);
            return { success: false };
        }
    },
    getSolvedCount: async (userId, topic) => {
        if (!shouldUseRemoteCompilerBackend()) {
            const bucket = readProgressBucket(userId, topic);
            return {
                success: true,
                solvedCount: bucket.solvedIds.length,
                solvedProblemIds: [...bucket.solvedIds]
            };
        }
        try {
            const response = await api.get(`/progress/${userId}/${topic}/solved-count`);
            return response.data;
        } catch (err) {
            if (debugCompilerApi()) console.warn('Solved count unavailable.', err?.message || err);
            return { success: false, solvedCount: 0, solvedProblemIds: [] };
        }
    }
};

// Students API
export const studentsApi = {
    submitQuiz: async (data) => {
        if (!shouldUseRemoteCompilerBackend()) {
            return { success: true, message: 'Local dev: submission not sent to server.' };
        }
        const response = await api.post('/students/submit-quiz', data);
        return response.data;
    }
};

export default api;
