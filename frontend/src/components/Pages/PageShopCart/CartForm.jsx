import React, {useEffect} from 'react';
import styles from './PageShopCart.module.css'
import { useAppContext } from "../../../context/AppContext"

function CartForm() {

    const {formData, cart, totalCost, setOrder, updateFormData, isActive, setIsActive} = useAppContext()
    const roundedTotalCost = Number(totalCost.toFixed(2));

      
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData(name, value);
    }
    useEffect(()=>{
        const formattedOrder = cart.map((product) => ({
            name: product.name,
            quantity: product.count,
        }))

        setOrder(
            {
                products: formattedOrder,
                totalCost: roundedTotalCost,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address
            }
        )
    }, [cart, formData, roundedTotalCost, setOrder])

    return (
    <div className={`${styles.form} 
        ${isActive.isToggle ? styles.active : ''}`}
        onClick={()=>setIsActive(
            {...isActive, isToggle: false}
        )}
    >
        <div className={styles.form__body} onClick={(e) => e.stopPropagation()}>
            {Object.entries(formData).map(([inputName, inputValue], index)=>{
                const changeInputName = inputName[0].toUpperCase() + inputName.slice(1);
                return (
                <div key={inputName} 
                className={`${styles.body__input}`}>
                    <p className={styles.input__title}>{changeInputName}</p>
                    <input className={styles.input__body}
                        type={inputName === 'phone' ? 'tel' : 'text'}
                        name={inputName}
                        value={inputValue}
                        onChange={handleChange}
                        required
                    />
                </div>
                )
            })}
        </div>
    </div>
    );
}
  
export default CartForm;