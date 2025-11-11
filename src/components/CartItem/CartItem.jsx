import './CartItem.css'
import { useContext } from 'react'
import { cartContext }  from '../../context/cartContext'

function CartItem(cartItem) {
  const { removeFromCart } = useContext(cartContext)

  const handleRemoveFromCart = () => {
    removeFromCart(cartItem.id)
  }

  return (
    <div className='cart-item'>
      <img width="50" src={cartItem.image} alt={cartItem.title} />
      <p className='title'>{cartItem.title}</p>
      <p className='quantity'>{cartItem.quantity} unid.</p>
      <p className='price'>${cartItem.price.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
      <button className='item-button' onClick={handleRemoveFromCart}>Eliminar</button>
    </div>
  )
}

export default CartItem
