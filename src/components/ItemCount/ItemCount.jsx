import './ItemCount.css'
import { useState, useContext } from 'react'
import { cartContext }  from '../../context/cartContext'

function ItemCount({item}) {
  const [maxCount] = useState(item.stock)
  const [itemCounter, setItemCounter] = useState(1)
  const { addToCart } = useContext(cartContext)
  
  const handleAddToCart = () => {
    addToCart(item, itemCounter)
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
