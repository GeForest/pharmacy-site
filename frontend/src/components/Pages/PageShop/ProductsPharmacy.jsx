import styles from './PageShop.module.css'
import { useAppContext } from "../../../context/AppContext"


function ProductsPharmacy() {
    const { products, addToCart, sortProducts, sortByFavorite } = useAppContext();
    
    if (!products || products.length === 0) {
    return <p>Loading...</p>;
    }

    return (
    <div className={styles.products}>
        <div className={styles.products__sort}
            onClick={()=>sortProducts()}
        ></div>
        <div className={styles.products__body}>
        {products.map((product)=>{
            const imagePath = require(`../../../assets/img-products/${product.img}`);
            const imageTrue = require('../../../assets/icons/fav-true-icon.png')
            const imageFalse = require('../../../assets/icons/fav-false-icon.png')
            return (
            <div key={product._id}
            className={`${styles.body__card}`}
            >
                <div className={styles.card__top}>
                    <img src={imagePath}  alt='productImage'/>
                    <h2>{product.name}</h2>
                    <span>{product.price} &euro;</span>
                </div>
                <div className={styles.card__bottom}>
                    <div className={styles.bottom__favorite}
                        onClick={()=>sortByFavorite(product._id)}
                    >
                        {product.favorite === false ? <img src={imageFalse} alt='Not favorite' /> : <img src={imageTrue} alt='Favorite' />}
                    </div>
                    <div className={styles.bottom__button}
                    onClick={() => addToCart(product)}
                    >Add to Cart</div>
                </div>
            </div>
            )
        })}
        </div>
    </div>
    );
}
  
  export default ProductsPharmacy;