import './OrderListContainer.css'
import { useState, useEffect } from "react"
import { getAllBuyOrders } from '../../data/FirestoreService'
import OrderList from '../OrderList/OrderList';

function OrderListContainer() {
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])
  const [dataMessage, setDataMessage] = useState("")
  
  useEffect(() => {
    setLoading(true)
    getAllBuyOrders().
      then((data) => setOrders(data)).
      catch((error) => { setOrders([]); setDataMessage(error) }).
      finally(() => setLoading(false))
  }, [])

  // <p>85 compras por un total de $375.000,00</p>

  return (
    <section>
      <div className='section-container'>
        {/* Header */}
        <div className='section-header'>
          <p className='section-title'>Mis Compras</p>
          {loading 
            ? <p>Cargando...</p> 
            : <p>{orders.length} compras por un total de ${orders.reduce((total, order) => total + order.total, 0).
                toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
          }
        </div>
              
        {/* Body */}
        {orders.map(order => (<OrderList key={order.id} {...order} />))}

        {/* Footer */}
        <div className='section-footer'>
          <button className='section-button' disabled={true}>Eliminar historial</button>
        </div>
      </div>
    </section>
  )
}

export default OrderListContainer
