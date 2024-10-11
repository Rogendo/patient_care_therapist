import axios from 'axios';

async function query(data: any): Promise<any> {
    // Corrected the endpoint to '/api/v1/prediction/'
    const response = await axios.post('http://localhost:3000/api/v1/prediction/deedebbd-4a01-49cf-9cc5-72daaf4e1a20', data);  
    console.log('Response data:', response.data);
    return response.data;
}

export default query;
