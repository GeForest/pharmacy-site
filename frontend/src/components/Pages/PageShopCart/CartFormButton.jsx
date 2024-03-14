
import styles from './PageShopCart.module.css'
import { useAppContext } from '../../../context/AppContext';


function CartFormButton() {
    const {isActive, setIsActive} = useAppContext()
    
    return (
        <div className={`${styles.shop__button} 
        ${isActive.isNotAllFillField ? styles.active__warn : ''}`}
        onClick={()=>setIsActive({...isActive, isToggle: !isActive.isToggle, isNotAllFillField: false})}
        ></div>
    )
}

export default CartFormButton;