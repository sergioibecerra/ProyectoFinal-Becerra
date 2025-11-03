import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getFeaturedItems, getOnSaleItems, getAllItems, getItemsByCategory, exportProducts } from '../../data/FirestoreService'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({ scope }) {
  console.log('Cargo componente: ItemListContainer'); // TODO: Eliminar debug

  const { categoryId } = useParams()
  const [greeting, setGreeting] = useState('')
  const [loading, setLoading] = useState(true)
  const [initializing, setInitializing] = useState(false)
  const [items, setItems] = useState([])
  const [dataMessage, setDataMessage] = useState("")

  useEffect(() => {
    setLoading(true)
    if (scope === 'featured') {
      setGreeting('Productos Destacados');
      getFeaturedItems().
        then((data) => setItems(data)).
        catch((error) => { setItems([]); setDataMessage(error) }).
        finally(() => setLoading(false));
    } else if (scope === 'offers') {
      setGreeting('Productos en Oferta');
      getOnSaleItems().
        then((data) => setItems(data)).
        catch((error) => { setItems([]); setDataMessage(error) }).
        finally(() => setLoading(false))
    } else if (scope === 'all') {
      setGreeting('Todas las Categorías');
      getAllItems().
        then((data) => setItems(data)).
        catch((error) => { setItems([]); setDataMessage(error) }).
        finally(() => setLoading(false))
    } else {
      setGreeting('[nombre de la categoría]');
      getItemsByCategory(categoryId).
        then((data) => { setItems(data); console.log(data) }).
        catch((error) => { setItems([]); setDataMessage(error) }).
        finally(() => setLoading(false));
    }
  }, [categoryId, scope])

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
          <p className='section-title'>{greeting}</p>
          {loading 
            ? <p>Cargando...</p> 
            : <p>{items.length} productos encontrados</p>
          }
        </div>
              
        {/* Body */}
        {!loading && scope === 'all' && items.length === 0
          ? // Footer with initial load button
            <div className='section-footer'>
              <button className='section-button' disabled={initializing} onClick={handleInitialLoad}>Carga inicial de productos</button>
              {initializing && <p>Cargando productos...</p>}
            </div>
          : items.length > 0
            ? <div className='items-container'> 
                {items.map(item => (<ItemList key={item.id} {...item} />))}
              </div>
            : <p>{dataMessage}</p>
        }
      </div>
    </section>
  )
}

export default ItemListContainer
