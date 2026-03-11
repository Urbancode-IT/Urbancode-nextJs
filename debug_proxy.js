
async function test() {
    const BACKEND_URL = 'https://urbancode-nextjs.onrender.com';
    const body = {
        participantDetails: { email: "test@example.com", name: "Test" },
        dynamicAnswers: [],
        trainerEvaluations: [{ trainerId: "6995df6ff9513c47b0f0c558", trainerName: "savitha", ratings: {} }]
    };

    console.log('Sending to:', `${BACKEND_URL}/api/responses`);
    try {
        const res = await fetch(`${BACKEND_URL}/api/responses`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        console.log('Status:', res.status);
        const data = await res.json().catch(async (err) => {
            console.log('JSON failed, trying text...');
            const text = await res.text().catch(() => 'No response body');
            return { message: text };
        });
        console.log('Data:', data);
    } catch (err) {
        console.error('Network Error:', err.message);
    }
}

test();
