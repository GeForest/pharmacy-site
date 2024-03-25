import axios from "axios"
import dotenv from 'dotenv';
dotenv.config();
const MAIN_API_URL = process.env.REACT_APP_URL

const instance = axios.create({
    baseURL: MAIN_API_URL,
    headers: {
        accept: 'application/json'
    }
})

instance.interceptors.request.use(
    (config) => {
        if (localStorage.token) {
            config.headers.Authorization = `Bearer ${localStorage.token}`;
            config.headers["Content-Type"] = "application/json";
        } else {
            delete config.headers.Authorization;
        }
        return config;
    },
    (err) => {
        alert("Something is wrong")
        return Promise.reject(err)
    }
)

export default instance;