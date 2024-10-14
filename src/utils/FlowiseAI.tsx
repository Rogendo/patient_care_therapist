import axios from 'axios';

async function query(data: any, sessionId: string): Promise<any> {
    // Make sure to pass the sessionId in each request
    const overrideConfig = {
        "sessionId": sessionId,
        // Add any other config options you need
    };

    // Sending the chat request
    const response = await axios.post(`http://localhost:3000/api/v1/prediction/deedebbd-4a01-49cf-9cc5-72daaf4e1a20`, data, {
        headers: {
            "Authorization": "Bearer JWT",
            "Content-Type": "application/json",
        }
    });

    console.log('Response data:', response.data);
    console.log(`Received sessionId: ${sessionId} for question: ${data}`);

    // Updating the session in Flowise
    await axios.post('http://localhost:3000/api/v1/session', overrideConfig, {
        headers: {
            "Authorization": "Bearer JWT",
            "Content-Type": "application/json"
        }
    });

    return response.data;
}

export default query;
