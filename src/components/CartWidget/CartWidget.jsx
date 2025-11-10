import './CartWidget.css'
import cartLogo from '../../assets/cart.svg'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

function CartWidget(){
  const { cartCount } = useContext(cartContext)

  return (
    <div className='cart-widget'>
      <img src={cartLogo} alt='Cart' className='logo' />
      <span className='badge'>{cartCount}</span>
    </div>
  )
}

export default CartWidget
