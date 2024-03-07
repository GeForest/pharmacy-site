import React from 'react';
import styles from './PageShop.module.css'
import { useAppContext } from "../../../context/AppContext"

function PharmacyList() {
    const { pharmacies, selectedPharmacy, setSelectedPharmacy, loadProductsByPharmacy } = useAppContext();
    
    return (
    <div className={styles.pharmacies}>
        <div className={styles.pharmacies__shops}>
            <p className={styles.shops__title}>Shops</p>
            <div className={styles.shops__list}>
                {pharmacies.map((pharmacy, index)=>{
                    return (
                    <div key={pharmacy._id}
                    className={`${styles.list__buttons} ${pharmacy.products_collection === selectedPharmacy ? styles.active : ''}`}
                    onClick={() => {
                        if(pharmacy.products_collection !== selectedPharmacy) {
                            setSelectedPharmacy(pharmacy.products_collection)
                            loadProductsByPharmacy(pharmacy.products_collection)
                        }
                    }}
                    >
                        <h2>{pharmacy.name}</h2>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
    );
}
  
  export default PharmacyList;