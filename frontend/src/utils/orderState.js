import { useState } from "react";
import { apiRequests } from "../api//apiRequests"
import { request } from './config.json'

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

    const [isActive, setIsActive] = useState({
        isNotAllFillField: false,
        isToggle: false
    })

    const updateFormData = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const sendOrderOnDB = async (cartSetter, totalCostSetter) => {
        const {products, totalCost, name, email, phone, address} = order
        const hasEmptyFields = !products.length || !totalCost || !name || !email || !phone || !address

        if(hasEmptyFields) {
            setIsActive({...isActive, isNotAllFillField: true})
        } else {
            try {
                await apiRequests.postItems(request.url, request.idOrder, order)
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                });
                cartSetter([])
                totalCostSetter(0)
                alert('Your is order in processes')
            } catch (error) {
                console.error('Error posting order:', error)
                throw error
            }
        }
    }

    

    return { setOrder, formData, updateFormData, sendOrderOnDB, isActive, setIsActive }
}