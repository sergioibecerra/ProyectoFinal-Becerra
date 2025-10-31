import './CartContainer.css'

function CartContainer() {
  console.log('Cargo componente: CartContainer'); // TODO: Eliminar debug

  function handleCheckout() {
    console.log('Finalizar compra');
  }

  return (
    <section>
      <div className='section-container'>
        {/* Header */}
        <div className='section-header'>
          <p className='section-title'>Carrito de compras</p>
          <span>4 productos por un total de $47.815,63</span> 
        </div>
              
        {/* Body */}
        <div className='section-body'>
          <div className='item'>
            <span>Producto 1</span>
            <span>$10.00</span>
          </div>
          <div className='item'>
            <span>Producto 2</span>
            <span>$15.00</span>
          </div>
        </div>

        {/* Footer */}
        <div className='section-footer'>
          <button className='section-button' onClick={handleCheckout}>Finalizar compra</button>
        </div>
      </div>
    </section>
  )
}

export default CartContainer
