import { createContext, useState } from 'react'

export const cartContext = createContext()

const CartProvider = ({children}) => {
  const [cartCount, setCartCount] = useState(0)
  const [cart, setCart] = useState([])
    
  const addToCart = (item, itemCounter) => {
    const index = cart.findIndex(cartItem => cartItem.id === item.id)
    if (index !== -1) {
      cart[index].quantity += itemCounter
      cart[index].total += item.price * itemCounter
    } else {
      setCart(prevcart => [...prevcart, {...item, quantity: itemCounter, total: item.price * itemCounter}])
    }
    setCartCount(prevCount => prevCount + itemCounter)
  }

  const removeFromCart = (itemId) => {
    const index = cart.findIndex(cartItem => cartItem.id === itemId)
    if (index !== -1) {
      setCart(prevcart => {
        const newcart = [...prevcart]
        newcart.splice(index, 1)
        return newcart
      })
      setCartCount(prevCount => prevCount - cart[index].quantity)
    }
  }

  const clearCart = () => {
    setCart([])
    setCartCount(0)
  }

  const totalAmountInCart = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const quantityInCart = (itemId) => {
    const index = cart.findIndex(cartItem => cartItem.id === itemId)
    if (index !== -1) {
      return cart[index].quantity
    } else {
      return 0
    }
  }

  return (
    <cartContext.Provider value={{cartCount, setCartCount, cart, addToCart, removeFromCart, clearCart, totalAmountInCart, quantityInCart}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
