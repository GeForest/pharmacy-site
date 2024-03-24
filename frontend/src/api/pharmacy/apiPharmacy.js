import instance from "../instance"
import requests from './apiRequests'

export default {
    pharmacy: requests(instance),
}