import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://192.168.0.104:3333'
    baseURL: 'http://10.68.10.18:3333'
});

export default api