import './CartContainer.css'
import { useContext, useState } from "react";
import { cartContext }  from '../../context/cartContext'
import CartItem from '../CartItem/CartItem'

function CartContainer() {
  const { cart, clearCart, cartCount, totalAmountInCart } = useContext(cartContext);

  function handleCheckout(formData) {
    console.log('Finalizar compra');
    console.log(formData);
  }

  function handleClearCart() {
    const confirmed = window.confirm('¿Confirma que vacía el carrito?');
    if (confirmed) {
      clearCart();
    }
  }

  return (
    <section>
      <div className='section-container'>
        {/* Header */}
        <div className='section-header'>
          <p className='section-title'>Carrito</p>
          {cartCount > 0 
            ? <p>{cartCount} productos por un total de ${totalAmountInCart().
                toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            : <p>No hay productos en el carrito</p> 
          }
        </div>

        {/* Body */}
        <div>
          {cart.map(item => (<CartItem key={item.id} {...item} />))}
        </div>

        {/* Footer */}
        {cartCount > 0 
          ? <div className='section-footer'>
              <button className='section-button' onClick={handleCheckout}>Finalizar compra</button>
              <button className='section-button' onClick={handleClearCart}>Vaciar carrito</button>
            </div>
          : ""
        }
      </div>
    </section>
  )
}

export default CartContainer

/*cart.reduce((total, item) => total + item.price * item.quantity, 0)*/