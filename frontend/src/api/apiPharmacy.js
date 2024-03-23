import axios from 'axios'

export const apiPharmacy = async () => {
    try {
    const response = await axios.get('/.netlify/functions/handler/pharmacies')
    console.log(response);
    return response.data.pharmacies;
    } catch (err){
        console.error('Error fetching pharmacies:', err);
        throw err;
    }
}