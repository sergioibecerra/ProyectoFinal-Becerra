import './OrderList.css'

function OrderList(order) {
  return (
    <div className='order-list'>
      <p className='number'>Orden #{order.id}</p>
      <p>{order.date.toDate().toLocaleString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}</p>
      <p>{order.buyer.username}</p>
      <p>{order.quantity} unid.</p>
      <p className='total'>Total ${order.total.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
      <button className='item-button' disabled={true}>Detalles</button>
    </div>
  )
}

export default OrderList
