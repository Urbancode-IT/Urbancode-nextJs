
async function test() {
    const BACKEND_URL = 'https://urbancode-nextjs.onrender.com';
    const body = {
        participantDetails: { email: "test@example.com" }
    };

    try {
        const res = await fetch(`${BACKEND_URL}/api/responses`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        console.log('Status:', res.status);
        const data = await res.json().catch(() => ({}));
        console.log('Data:', data);
    } catch (err) { console.error(err); }
}
test();
