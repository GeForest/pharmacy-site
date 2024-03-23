import axios from 'axios'

export const apiProduct = async (pharmacyCollection) => {
    try {
    const response = await axios.get(`/.netlify/functions/handler/${pharmacyCollection}`)
    return response.data;
    } catch (err){
        console.error('Error fetching pharmacies:', err);
        throw err;
    }
}