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

  return (
    <section>
      <div className='section-container'>
        {/* Header */}
        <div className='section-header'>
          <p className='section-title'>Mis compras</p>
          {loading 
            ? <p>Cargando...</p> 
            : !dataMessage 
              ? <p>{orders.length} compras por un total de ${orders.reduce((total, order) => total + order.total, 0).
                  toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
              : <p>{dataMessage}</p>
          }
        </div>
              
        {/* List */}
        {!dataMessage && orders.map(order => (<OrderList key={order.id} {...order} />))}

        {/* Footer */}
        {!dataMessage && 
          <div className='section-footer'>
            <button className='section-button' disabled={true}>Eliminar historial</button>
          </div>
        }
      </div>
    </section>
  )
}

export default OrderListContainer
