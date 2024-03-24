import { apiRequestGet } from './apiRequestGet';
import { apiRequestPost } from './apiRequestPost';

export const apiRequests = {
    getItems: apiRequestGet(url, id),
    postItems: apiRequestPost(url, id, order),
}