import React from 'react';
import styles from './PageShop.module.css'
import PharmacyList from './PharmaciesList'
import ProductsPharmacy from './ProductsPharmacy'

function Shop() {

    return (
    <div className={styles.shop}>
        <PharmacyList />
        <ProductsPharmacy />
    </div>
    );
}
  
  export default Shop;