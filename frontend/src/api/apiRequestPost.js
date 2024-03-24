import axios from 'axios'

export const apiRequestPost = async (url, id, order) => {
    try {
        await axios.post(`${url}${id}`, order,{
            headers: {'Content-Type': 'application/json',}
        })
    } catch (err) {
        console.error('Error posting order:', err);
        throw err;
    }
}