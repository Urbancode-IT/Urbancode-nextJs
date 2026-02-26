import axios from 'axios';

const API_BASE_URL = (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL) || 'https://urbancode-nextjs.onrender.com/api' || 'http://localhost:5001/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
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
        try {
            const response = await api.get('/problems/topics/summary');
            return response.data;
        } catch (err) {
            console.warn('Backend unavailable, using fallback topics.');
            return { success: true, data: FALLBACK_TOPICS };
        }
    },
    getProblemsByTopic: async (topic) => {
        const response = await api.get(`/problems/topic/${encodeURIComponent(topic)}`);
        return response.data;
    },
    getProblemById: async (id) => {
        const response = await api.get(`/problems/${id}`);
        return response.data;
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
        try {
            const response = await api.get('/quizzes/topics');
            return response.data;
        } catch (err) {
            console.warn('Backend unavailable, quiz topics not loaded.');
            return { success: true, data: [] };
        }
    },
    getQuizByTopicAndLevel: async (topic, level) => {
        const response = await api.get(`/quizzes/${encodeURIComponent(topic)}/${encodeURIComponent(level)}`);
        return response.data;
    }
};

// Progress API
export const progressApi = {
    getUserProgress: async (userId, topic) => {
        const response = await api.get(`/progress/${userId}/${topic}`);
        return response.data;
    },
    saveUserCode: async (data) => {
        const response = await api.post('/progress/save-code', data);
        return response.data;
    },
    markProblemSolved: async (data) => {
        const response = await api.post('/progress/mark-solved', data);
        return response.data;
    },
    getSolvedCount: async (userId, topic) => {
        const response = await api.get(`/progress/${userId}/${topic}/solved-count`);
        return response.data;
    }
};

// Students API
export const studentsApi = {
    submitQuiz: async (data) => {
        const response = await api.post('/students/submit-quiz', data);
        return response.data;
    }
};

export default api;
