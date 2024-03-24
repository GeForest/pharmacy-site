import {useState, useEffect} from "react"
import PharmaciesApi from "../api/pharmacy/apiPharmacy"

export const usePharmacyFunction = () => {
    const [pharmacies, setPharmacies] = useState([])
    const [selectedPharmacy, setSelectedPharmacy] = useState(null)
    const [products, setProducts] = useState([])
    const [sortLow, setSortLow] = useState(false)

    useEffect(() => {
        const getPharmaciesData = async () => {
            try {
            const { data } = await PharmaciesApi.pharmacy.getPharmacies()
            setPharmacies(data.pharmacies)
            const defaultPharmacy = data.pharmacies[0].products_collection
            setSelectedPharmacy(defaultPharmacy)
            loadProductsByPharmacy(defaultPharmacy)
            } catch (err) {
                console.error('Error fetching pharmacies:', err)
            }
        }

        getPharmaciesData()
    }, [])

    const loadProductsByPharmacy = (pharmacyCollection) => {
        const getProductsData = async () => {
            try {
                const { data } = await PharmaciesApi.pharmacy.getProducts(pharmacyCollection)
                setProducts([...data])
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        getProductsData()
    };

    const sortProducts = () => {
        const sortedProducts = [...products]
        sortedProducts.sort((a, b) => {
            if (!sortLow) {
                return a.price - b.price
            } else {
                return b.price - a.price
            }
        })

        setProducts(sortedProducts)
        setSortLow(!sortLow)
    }

    const sortByFavorite = (id) => {
        setProducts(prevProducts => {
            const updatedProducts = prevProducts.map(product => {
                if (product._id === id) {
                    return { ...product, favorite: !product.favorite };
                }
                return product;
            });
    
            const sortedProducts = [...updatedProducts].sort((a, b) => {
                if (a.favorite && !b.favorite) {
                    return -1;
                } else if (!a.favorite && b.favorite) {
                    return 1;
                }
                return 0;
            });
    
            return sortedProducts;
        });
    }

    return { pharmacies, setPharmacies, selectedPharmacy, setSelectedPharmacy, products, setProducts, loadProductsByPharmacy, sortProducts, sortByFavorite };
}