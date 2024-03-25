import React from 'react';
import styles from './PageShop.module.css'
import PharmacyList from './PharmaciesList'
import ProductsPharmacy from './ProductsPharmacy'
import Notification from '../../Notices/NoticeAddToCart';

function Shop() {

    return (
    <div className={styles.shop}>
        <PharmacyList />
        <ProductsPharmacy />
        <Notification />
    </div>
    );
}
  
  export default Shop;