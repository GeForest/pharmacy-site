import axios from "axios"
import configUrl from './config.json'
const mainUrl = configUrl.request.url

const instance = axios.create({
    baseURL: mainUrl,
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