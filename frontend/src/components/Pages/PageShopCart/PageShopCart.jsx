import React from 'react';
import styles from './PageShopCart.module.css'
import CartForm from './CartForm';
import Cart from './Cart';

function PageShopCart() {

    return (
    <div className={styles.shop__cart}>
        <CartForm />
        <Cart />
    </div>
    );
}
  
  export default PageShopCart;