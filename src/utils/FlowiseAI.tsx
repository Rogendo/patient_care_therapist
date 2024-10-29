import axios from 'axios';

async function query(data: any): Promise<any> {
//    const apiUrl = process.env.REACT_APP_API_URL; // Get API URL from env
//    const chatId = process.env.CHAT_ID; // Get CHAT_ID from env

    // Sending the chat request
    // const response = await axios.post(`${apiUrl}/api/v1/prediction/${chatId}/`, data, {
        const response = await axios.post("https://server.chat.patientcare.care/api/v1/prediction/238415e6-0cda-458f-8510-ec9aeda447f4/", data, {
        headers: {
            "Authorization": "Bearer JWT",
            "Content-Type": "application/json",
        }
    });

    console.log('Response data:', response.data);
   // console.log("Received sessionId: ${sessionId} for question: ${data}");
    console.log("This is test");

    return response.data;
}

export default query;