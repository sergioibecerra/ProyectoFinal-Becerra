import './ItemDetailContainer.css'
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { getItemById } from '../../data/FirestoreService'
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
  const {itemId} = useParams()
  const [loading, setLoading] = useState()
  const [item, setItem] = useState()
  const [dataMessage, setDataMessage] = useState("")

  useEffect(() => {
    setLoading(true)
    getItemById(itemId).
      then((data) => setItem(data) ).
      catch((error) => { setItem(null); setDataMessage(error); }).
      finally(() => setLoading(false))
  }, [itemId])

  return (
    <section className='item-detail-container'>
      {/* Header */}
      <div className='section-header'>
        <p className='section-title'>Detalles de Producto</p>
        {loading 
          ? <p>Cargando...</p> 
          : <p>{dataMessage}</p>
        }
      </div>

      {item && <ItemDetail item={item} />} 
    </section>
  )
}

export default ItemDetailContainer
