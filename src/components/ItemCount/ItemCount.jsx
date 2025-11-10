import './ItemCount.css'
import { useState, useEffect, useContext } from 'react'
import { cartContext } from '../../context/cartContext'

function ItemCount({available}) {
  const [maxCount] = useState(available)
  const { itemCounter, setItemCounter } = useContext(cartContext)
  //const { addToCart } = useContext(cartContext)
  
  useEffect(() => {
    setItemCounter(1)
  }, [setItemCounter])  // esto hay que ponerlo asi por que cuando cambio el itemCounte se ejecuta actualizar este componente por que esta dentro del alcance
  // del CartProvider que cuando cambia un valor, se reejecuta todo (como va a ser el valor del cart de pedidos)

  const handleAddToCart = () => {
    //addToCart(item)
  }

  return (
    <div className='item-count'>
      <div className='counter'>
        <button onClick={() => setItemCounter(itemCounter-1)} disabled={itemCounter === 1}>-</button>
        <p style={{width: '1.5rem'}}>{itemCounter}</p>
        <button onClick={() => setItemCounter(itemCounter+1)} disabled={itemCounter === maxCount}>+</button>
      </div>
      <button className='add-to-cart-button' onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount
