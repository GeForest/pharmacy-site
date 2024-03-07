import { useState } from "react";

export const useOrderFunction = () => {
    const [order, setOrder] = useState({
        products: [],
        totalCost: 0,
        name: '',
        email: '',
        phone: '',
        address: '',
    })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    })

    const updateFormData = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const sendOrderOnDB = () => {
        const {products, totalCost, name, email, phone, address} = order
        const hasEmptyFields = !products.length || !totalCost || !name || !email || !phone || !address

        if(hasEmptyFields) {
            alert('Fill in all the fields')
        } else {
            fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            })
            .then((response) => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                });
                alert('Your is order in processes')
            })
            .catch(error => {
              console.error('Error:', error);
            });

        }
    }

    

    return { setOrder, formData, updateFormData, sendOrderOnDB }
}