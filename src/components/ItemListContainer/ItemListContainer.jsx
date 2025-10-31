import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getAllItems, getItemsByCategory, exportProducts } from '../../data/FirestoreService'

function ItemListContainer(props) {
  console.log('Cargo componente: ItemListContainer'); // TODO: Eliminar debug

  const {categoryId} = useParams()
  const [loading, setLoading] = useState(true)
  const [initializing, setInitializing] = useState(false)
  const [items, setItems] = useState([])
  const [dataMessage, setDataMessage] = useState("")

  useEffect(() => {
    setLoading(true)
    if (categoryId) {
      getItemsByCategory(categoryId).
        then((data) => setItems(data)).
        catch((error) => { setItems([]); setDataMessage(error) }).
        finally(() => setLoading(false))
    } else {
      getAllItems().
        then((data) => setItems(data)).
        catch((error) => { setItems([]); setDataMessage(error) }).
        finally(() => setLoading(false))
    }
  }, [categoryId])

  function handleInitialLoad() {
    const confirmed = window.confirm('¿Confirma la carga inicial de productos a Firestore?');
    if (confirmed) {
      console.log('Exportando productos a Firestore...');
      setInitializing(true);
      exportProducts().then(() => {
        console.log('Productos exportados con éxito');
      }).catch((error) => {
        console.error('Error al exportar productos:', error);
      }).finally(() => {
        setInitializing(false);
        window.location.reload();
      });
    }
  }

  return (
    <section>
      <div className='section-container'>
        {/* Header */}
        <div className='section-header'>
          <p className='section-title'>{props.greeting+(categoryId ?" "+categoryId : "")}</p>
          {loading 
            ? <p>Cargando...</p> 
            : <p>{items.length} productos encontrados</p>
          }
        </div>
              
        {/* Body */}
        {!loading && !categoryId && items.length === 0
          ? 
            // Footer with initial load button
            <div className='section-footer'>
              <button className='section-button' disabled={initializing} onClick={handleInitialLoad}>Carga inicial de productos</button>
              {initializing && <p>Cargando productos...</p>}
            </div>
          : items.length > 0
            ? <p>Muestro lista de productos...</p>
            : <p>{dataMessage}</p>
        }
      </div>
    </section>
  )
}

export default ItemListContainer
