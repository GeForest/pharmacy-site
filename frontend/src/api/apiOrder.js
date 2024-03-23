import axios from 'axios'

export const apiOrder = async (order) => {
    try {
        const response = await axios.post('/.netlify/functions/handler/orders', order,{
            headers: {'Content-Type': 'application/json',}
        })
    } catch (err) {
        console.error('Error posting order:', err);
        throw err;
    }
}