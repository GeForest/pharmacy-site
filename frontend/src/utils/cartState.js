import { useState, useEffect } from "react";

export const useCartFunction = () => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = (product) => {
    const productExist = cart.find(el => el._id === product._id)
    if (!productExist) {
      setCart([...cart, { ...product }])
    } else {
      increment(product._id, product.price)
    }
    setTotalCost(totalCost + product.price)
  }

  const removeProductCart = (product) => {
    setCart(cart.filter(el => el._id !== product._id))
    setTotalCost(totalCost - (product.price * product.count))
  }

  const increment = (id, price) => {
    setCart(cart.map(el => {
      if (el._id === id) {
        el.count++
      }
      return el
    }))
    setTotalCost(totalCost + price);
  }

  const decrement = (product, id, count) => {
    if (count === 1) {
      setCart(cart.filter(el => el._id !== id))
      setTotalCost(totalCost - product.price)
    } else {
      setCart(cart.map(el => {
        if (el._id === id) {
          el.count--
        }
        return el
      }))
      setTotalCost(totalCost - product.price)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('cart') !== null) {
      setCart(JSON.parse(localStorage.getItem('cart')))
      setTotalCost(JSON.parse(localStorage.getItem('totalCost')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('totalCost', JSON.stringify(totalCost))
  }, [totalCost])

  return { cart, setCart, totalCost, setTotalCost, addToCart, removeProductCart, increment, decrement, }
}