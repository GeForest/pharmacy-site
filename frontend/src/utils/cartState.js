import { useState, useEffect } from "react";

export const useCartFunction = () => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [notice, setNotice] = useState({
    state: false,
    modification: {
      add: 'Add to cart: ',
      remove: 'Removed from cart: ',
    },
    title: ''
  });
  const [isChecked, setIsChecked] = useState([])

  const addToCart = (product, operation) => {
    const productExist = cart.find(el => el._id === product._id)
    if (!productExist) {
      setCart([...cart, { ...product }])
      setNotice(prevState=> ({ ...prevState, state: true, title: product.name, operation }))
      setIsChecked(prevState=> [...prevState, product._id])
    }
    setTotalCost(prevTotalCost => prevTotalCost + product.price)
  }

  const removeProductCart = (product) => {
    setCart(cart.filter(el => el._id !== product._id))
    setIsChecked(prevState=> prevState.filter(el=>el !== product._id))
    setTotalCost(prevTotalCost => prevTotalCost - (product.price * product.count))
  }

  const increment = (id, price, setProducts) => {
    setCart( cart.map(el => {
      return (el._id === id) ? { ...el, count: el.count + 1 } : el
    }))
    setProducts(prevProducts => prevProducts.map(prevProduct =>
      prevProduct._id === id ? { ...prevProduct, count: prevProduct.count + 1 } : prevProduct
    ));
    setTotalCost(totalCost + price);
  }

  const decrement = (product, id, count, setProducts, operation) => {
    if (count === 1) {
      setNotice(prevState=> ({ ...prevState, state: true, title: product.name, operation }))
      removeProductCart(product, setProducts)
    } else {
      setCart(cart.map(el => {
        return el._id === id ? { ...el, count: el.count - 1 } : el
      }))
      setProducts(prevProducts => prevProducts.map(prevProduct =>
        prevProduct._id === id ? { ...prevProduct, count: prevProduct.count - 1 } : prevProduct
      ));
      setTotalCost(prevTotalCost => prevTotalCost - product.price)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('cart') !== null && localStorage.getItem('isChecked') !== null) {
      setCart(JSON.parse(localStorage.getItem('cart')))
      setTotalCost(JSON.parse(localStorage.getItem('totalCost')))
      setIsChecked(JSON.parse(localStorage.getItem('isChecked')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('isChecked', JSON.stringify(isChecked))
  }, [isChecked])

  useEffect(() => {
    localStorage.setItem('totalCost', JSON.stringify(totalCost))
  }, [totalCost])

  return { cart, setCart, totalCost, setTotalCost, addToCart, removeProductCart, increment, decrement, notice, setNotice, isChecked }
}