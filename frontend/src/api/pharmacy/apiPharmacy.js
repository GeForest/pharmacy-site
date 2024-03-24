import instance from "../instance"
import requests from './apiRequests'

const PharmaciesApi = {
    pharmacy: requests(instance),
}

export default PharmaciesApi;