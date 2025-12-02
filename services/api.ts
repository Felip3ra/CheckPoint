import axios from "axios";

const API_BASE_URL = "http://192.168.15.116:3000";

export const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message || error.message;
        return Promise.reject(new Error(message));
    }
);

export type ApiError = Error;
