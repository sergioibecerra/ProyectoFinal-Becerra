import { createContext, useState } from 'react'

export const cartContext = createContext() // No es un componente por lo que inicia en minúscula, CartProvider sí lo es

const CartProvider = ({children}) => {
  const [itemCounter, setItemCounter] = useState(1)
  const [cartCount, setCartCount] = useState(0)
  const [cartList, setCartList] = useState([])
    
  // Hay que copiar el arreglo, modificarlo y luego usar el setCartList para actualizar el estado
  const addToCart = (item) => {
    // usar alternativamente structurdClone(arrayACopiar) para clonar arreglos u objetos complejos
    // alternativa: const newCartList = JSON.parse(JSON.stringify(cartList))
    setCartList(prevCartList => [...prevCartList, {...item, quantity: itemCounter}])  // Hace lo mismo que un newCartList.push({...item, quantity: itemCounter})
    setCartCount(prevCount => prevCount + itemCounter)

    console.log("Adding to cart:", item, itemCounter)
    console.log("cartCount:", cartCount)
  }

  const removeFromCart = (itemId) => {
    console.log("Removing from cart:", itemId)
    const index = cartList.findIndex(item => item.id === itemId)
    if (index !== -1) {
      setCartList(prevCartList => {
        const newCartList = [...prevCartList]
        newCartList.splice(index, 1)
        return newCartList
      })
      setCartCount(prevCount => prevCount - cartList[index].quantity || 1) // Asumiendo que cada item tiene una propiedad 'quantity'
    }
  }

  const clearCart = () => {
    console.log("Clearing cart")
    setCartList([])
    setCartCount(0)
  }

  // Agregada para provar el total de ítems en el carrito
  const countItemsInCart = () => {
    return cartList.reduce((total, item) => total + item.quantity, 0)
  }

  // const totalAmountInCart = () => {
  //   return cartList.reduce((total, item) => total + item.price * item.quantity, 0)
  // }

  return (
    <cartContext.Provider value={{itemCounter, setItemCounter, cartCount, setCartCount, cartList, addToCart, removeFromCart, clearCart, countItemsInCart}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider