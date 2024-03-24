import { apiRequestGet } from './apiRequestGet';
import { apiRequestPost } from './apiRequestPost';

export const apiRequests = {
    getItems: (url, id) => apiRequestGet(url, id),
    postItems: (url, id, order) => apiRequestPost(url, id, order),
}