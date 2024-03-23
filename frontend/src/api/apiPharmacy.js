import axios from 'axios'

export const apiPharmacy = async () => {
    try {
    const response = await axios.get('/.netlify/functions/handler/pharmacies')
    console.log(response.data);
    return response.data;
    } catch (err){
        console.error('Error fetching pharmacies:', err);
        throw err;
    }
}