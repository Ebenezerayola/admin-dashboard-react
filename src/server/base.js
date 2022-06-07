import axios from 'axios';

const baseUrl = 'http://localhost:5000/v1/';

export const instance = () => axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const next = (e) => {
    throw new Error(e.response.data.returned_data ? e.response.data.returned_data : "Seems like your internet is poor");
}
