const axios = require('axios');

async function test() {
    try {
        const res = await axios.get('http://localhost:3000/api/questions');
        console.log(JSON.stringify(res.data, null, 2));
    } catch (err) {
        if (err.response) {
            console.log('STATUS:', err.response.status);
            console.log('DATA:', JSON.stringify(err.response.data, null, 2));
        } else {
            console.log('ERROR:', err.message);
        }
    }
}

test();
