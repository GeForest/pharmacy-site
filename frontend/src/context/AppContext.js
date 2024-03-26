import React, { createContext, useContext } from 'react';
import  { useCartFunction } from "../utils/cartState"
import { usePharmacyFunction } from "../utils/pharmacyState"
import { useOrderFunction } from "../utils/orderState"

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const { cart, setCart, totalCost, setTotalCost, addToCart, removeProductCart, increment, decrement, notice, setNotice, isChecked } = useCartFunction()
    const { pharmacies, setPharmacies, selectedPharmacy, setSelectedPharmacy, products, setProducts, loadProductsByPharmacy, sortProducts, sortByFavorite } = usePharmacyFunction()
    const {  formData, updateFormData, setOrder, sendOrderOnDB, isActive, setIsActive } = useOrderFunction()

    const value= {cart, totalCost, 
        addToCart, setCart, setTotalCost, removeProductCart, 
        increment, decrement, notice, setNotice, isChecked,
        pharmacies, setPharmacies, selectedPharmacy, setSelectedPharmacy, 
        products, setProducts, loadProductsByPharmacy, sortProducts, sortByFavorite,
         formData, updateFormData, setOrder, sendOrderOnDB, isActive, setIsActive
    }

    return (
        <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
