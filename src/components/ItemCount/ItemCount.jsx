import './ItemCount.css'
import { cartContext }  from '../../context/cartContext'
import { useState, useContext } from 'react'

function ItemCount({item}) {
  const { addToCart, quantityInCart } = useContext(cartContext)
  const available = item.stock - quantityInCart(item.id)
  const [maxCount, setMaxCount] = useState(available)
  const [itemCounter, setItemCounter] = useState(available > 0 ? 1 : 0)
    
  const handleAddToCart = () => {
    addToCart(item, itemCounter)
    const newMaxCount = maxCount - itemCounter
    setMaxCount(newMaxCount)
    newMaxCount > 0 ? setItemCounter(1) : setItemCounter(0)
  }

  return (
    <div className='item-count'>
      <div className='counter'>
        <button onClick={() => setItemCounter(itemCounter - 1)} disabled={itemCounter <= 1}>-</button>
        <p style={{width: '1.5rem'}}>{itemCounter}</p>
        <button onClick={() => setItemCounter(itemCounter + 1)} disabled={itemCounter >= maxCount}>+</button>
      </div>
      <button className='add-to-cart-button' onClick={handleAddToCart} disabled={maxCount === 0}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount
