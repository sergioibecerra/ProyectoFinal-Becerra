import './OrderListContainer.css'

function OrderListContainer() {
  console.log('Cargo componente: OrderListContainer'); // TODO: remove!!!

  function handleResetOrders() {
    console.log('Resetear compras');
    // lógica para resetear las compras
  }

  return (
    <section>
      <div className='section-container'>
        {/* Header */}
        <div className='section-header'>
          <p className='section-title'>Mis compras</p>
          <p>85 compras por un total de $375.000,00</p>
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
          <button className='section-button' onClick={handleResetOrders}>Resetear compras</button>
        </div>
      </div>
    </section>
  )
}

export default OrderListContainer
