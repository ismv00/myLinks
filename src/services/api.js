import axios from 'axios';

export const key = '7361d64ec6b54171d8913a2b4c54c60550e8c648';
const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})


export default api;

