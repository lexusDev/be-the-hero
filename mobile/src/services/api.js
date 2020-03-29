import axios from 'axios';

const api = axios.create({
    baseURL: 'http://18.230.72.135/:3333'
});

export default api;
