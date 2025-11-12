import './CartContainer.css'
import { useContext, useState } from "react";
import { cartContext }  from '../../context/cartContext'
import { createBuyOrder } from '../../data/FirestoreService'

import CartItem from '../CartItem/CartItem'
import CheckoutForm from '../CheckoutForm/CheckoutForm';

function CartContainer() {
  const { cart, clearCart, cartCount, totalAmountInCart } = useContext(cartContext);
  const [completingPurchase, setCompletingPurchase] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);

  function handleClearCart() {
    const confirmed = window.confirm('¿Confirma que vacía el carrito?');
    if (confirmed) {
      clearCart();
    }
  }

  function handleCompletePurchase() {
    setCompletingPurchase(true)
  }

    function handleCancelPurchase() {
    setCompletingPurchase(false)
  }

  async function handleCheckout(formData) {
    const orderData = {
      buyer: formData,
      items: cart,
      quantity: cartCount,
      total: totalAmountInCart(),
      date: new Date()
    }
    
    const response = await createBuyOrder(orderData)
    setOrderCreated(response.id)
    clearCart()
  }

  if(orderCreated){
    return <section>
      <h2>Gracias por su compra!</h2>
      <p>Este es el ID de la orden de compra: #{orderCreated}</p>
    </section>
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
        {cartCount > 0 && !completingPurchase && (
          <div className='section-footer'>
            <button className='section-button' onClick={handleCompletePurchase}>Finalizar compra</button>
            <button className='section-button' onClick={handleClearCart}>Vaciar carrito</button>
          </div>
        )}

        {/* Checkout Form */}
        {cartCount > 0 && completingPurchase && (
          <CheckoutForm onSubmit={handleCheckout} onCancel={handleCancelPurchase} />
        )}

      </div>
    </section>
  )
}

export default CartContainer
