import React from 'react';
import styles from './PageShopCart.module.css'
import CartForm from './CartForm';
import Cart from './Cart';
import CartFormButton from './CartFormButton';

function PageShopCart() {

    return (
    <div className={styles.shop__cart}>
        <CartFormButton />
        <CartForm />
        <Cart />
    </div>
    );
}
  
  export default PageShopCart;