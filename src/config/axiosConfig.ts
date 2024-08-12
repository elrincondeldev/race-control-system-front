import axios from 'axios';
import { BACKEND_URL } from '../constants';


export const apiClient = axios.create({
    baseURL: BACKEND_URL
})

export const setAuthToken = (token: string) => {
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common['Authorization'];
    }
}