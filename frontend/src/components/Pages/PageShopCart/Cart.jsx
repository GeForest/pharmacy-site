import React from 'react';
import styles from './PageShopCart.module.css'
import { useAppContext } from "../../../context/AppContext"


function Cart() {
    const { cart, setCart, totalCost, setTotalCost, removeProductCart, increment, decrement, sendOrderOnDB, setProducts } = useAppContext();

    return (
        <div className={styles.container}>
            <div className={styles.container__cart}>
                <div className={styles.cart__body}>
                    {cart.map((product)=>{
                    const imagePath = require(`../../../assets/img-products/${product.img}`);
                    console.log(totalCost);
                        return (
                        <div key={product._id} className={`${styles.body__item}`}>
                            <div className={styles.item__left}>
                                <img src={imagePath} alt="" />
                            </div>
                            <div className={styles.item__right}>
                                <div className={styles.right__info}>
                                    <h2 className={styles.info__title}>{product.name}</h2>
                                    <p className={styles.info__price}>Price: {product.price} &euro;</p>
                                </div>
                                <div className={styles.cart__count}>
                                    <div className={styles.count__block}>
                                        <span>{product.count}</span>
                                    </div>
                                    <div className={styles.count__buttons}>
                                        <div onClick={()=>{increment(product._id, product.price, setProducts)}}>+</div>
                                        <div onClick={()=>{decrement(product, product._id, product.count, setProducts)}}>-</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item__remove}
                                onClick={()=>removeProductCart(product)}
                            >&#10006;</div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.container__bottom}>
                <div className={styles.bottom}>
                    <div className={styles.bottom__totalPrice}>Total price: {totalCost < 0 ? '0.00' : totalCost.toFixed(2)} &euro;</div>
                    <div className={styles.bottom__button}
                        onClick={()=>{
                            sendOrderOnDB(setCart, setTotalCost)
                        }}
                    >Submit</div>
                </div>
            </div>
        </div>
    
    );
}
  
  export default Cart;