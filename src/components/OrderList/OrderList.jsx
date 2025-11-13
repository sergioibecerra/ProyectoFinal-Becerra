import './OrderList.css'

function OrderList(order) {
  return (
    <div className='order-list'>
      <p className='number'>Orden #{order.id}</p>
      <p>{order.date.toLocaleString()}</p>
      <p>{order.buyer.username}</p>
      <p>{order.quantity} unid.</p>
      <p className='total'>Total ${order.total.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
      <button className='item-button' disabled={true}>Detalles</button>
    </div>
  )
}

export default OrderList
