import { createContext, useState } from 'react'

export const cartContext = createContext() // No es un componente por lo que inicia en minúscula, CartProvider sí lo es

const CartProvider = ({children}) => {
  const [cartCount, setCartCount] = useState(0)
  const [cart, setcart] = useState([])
    
  const addToCart = (item, itemCounter) => {
    const index = cart.findIndex(cartItem => cartItem.id === item.id)
    if (index !== -1) {
      cart[index].quantity += itemCounter
    } else {
      setcart(prevcart => [...prevcart, {...item, quantity: itemCounter}])
    }
    setCartCount(prevCount => prevCount + itemCounter)
  }

  const removeFromCart = (itemId) => {
    const index = cart.findIndex(cartItem => cartItem.id === itemId)
    if (index !== -1) {
      setcart(prevcart => {
        const newcart = [...prevcart]
        newcart.splice(index, 1)
        return newcart
      })
      setCartCount(prevCount => prevCount - cart[index].quantity)
    }
  }

  const clearCart = () => {
    setcart([])
    setCartCount(0)
  }

    const totalAmountInCart = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <cartContext.Provider value={{cartCount, setCartCount, cart, addToCart, removeFromCart, clearCart, totalAmountInCart}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
