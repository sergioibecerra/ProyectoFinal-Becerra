import './OrderListContainer.css'

function OrderListContainer() {
  console.log('Cargo componente: OrderListContainer'); // TODO: remove!!!

  const showInitialLoadButton = true;

  function handleInitialLoad() {
    console.log('Carga inicial');

  }

  function handleResetOrders() {
    console.log('Resetear compras');  
  }

  return (
    <section>
      <div className='section-container'>
        {/* Header */}
        <div className='header'>
          <p className='section-title'>Mis compras</p>
          <span>85 compras por un total de $375.000,00</span> 
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
        <div className='footer'>
          { showInitialLoadButton ? <button className='section-button' onClick={handleInitialLoad}>Carga inicial</button> : null}
          <button className='section-button' onClick={handleResetOrders}>Resetear compras</button>
        </div>
      </div>
    </section>
  )
}

export default OrderListContainer
