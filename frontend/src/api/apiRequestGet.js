import axios from 'axios'

export const apiRequestGet = async (url, id) => {
    try {
    const response = await axios.get(`${url}${id}`)
    return response.data;
    } catch (err){
        console.error('Error fetching pharmacies:', err);
        throw err;
    }
}