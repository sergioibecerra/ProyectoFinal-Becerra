import './CartWidget.css'
import cartLogo from '../../assets/cart.svg'
//import { useContext } from 'react'
//import { cartContext } from '../../context/cartContext'

function CartWidget(){
  console.log('Cargo componente: CartWidget'); // TODO: remove!!!

  //const { cartCount } = useContext(cartContext)
  const cartCount = 0;

  return (
    <div className='cart-widget'>
      <img src={cartLogo} alt='Cart' className='logo' />
      <span className='badge'>{cartCount}</span>
    </div>
  )
}

export default CartWidget
