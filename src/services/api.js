import axios from 'axios';

const api = axios.create({
    baseURL: 'https://upload-backend-nodejs.herokuapp.com'
});

export default api;