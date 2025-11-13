import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router"
import { getFeaturedItems, getOnSaleItems, getAllItems, getItemsByCategory, exportProducts, getCategoryByCode } from '../../data/FirestoreService'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({ scope }) {
  const [searchParams] = useSearchParams();
  const categoryCode = searchParams.get("categoryCode");

  const [greeting, setGreeting] = useState('')
  const [loading, setLoading] = useState(true)
  const [initializing, setInitializing] = useState(false)
  const [items, setItems] = useState([])
  const [dataMessage, setDataMessage] = useState("")

  useEffect(() => {
    setLoading(true)
    if (scope === 'featured') {
      setGreeting('Productos destacados');
      getFeaturedItems().
        then((data) => setItems(data)).
        catch((error) => { setItems([]); setDataMessage(error) }).
        finally(() => setLoading(false));
    } else if (scope === 'offers') {
      setGreeting('Productos en oferta');
      getOnSaleItems().
        then((data) => setItems(data)).
        catch((error) => { setItems([]); setDataMessage(error) }).
        finally(() => setLoading(false))
    } else if (scope === 'all') {
      setGreeting('Todas las categorías');
      getAllItems().
        then((data) => setItems(data)).
        catch((error) => { setItems([]); setDataMessage(error) }).
        finally(() => setLoading(false))
    } else {
      // scope === 'category'
      getCategoryByCode(categoryCode).
        then((data) => { setGreeting(data ? data.name : 'Categoría no encontrada') }).
        catch((error) => { console.error(error) })

      getItemsByCategory(categoryCode).
        then((data) => { setItems(data) }).
        catch((error) => { setItems([]); setDataMessage(error) }).
        finally(() => setLoading(false))
    }
  }, [categoryCode, scope])

  // Restaura la posición del scroll después de cargar los items
  useEffect(() => {
    if (!loading && items.length > 0) {
      const savedScrollPosition = sessionStorage.getItem('scrollPosition')
      if (savedScrollPosition) {
        // Usa setTimeout para asegurar que el DOM esté renderizado
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedScrollPosition))
          // Limpia la posición guardada después de usarla
          sessionStorage.removeItem('scrollPosition')
        }, 100)
      }
    }
  }, [loading, items])

  function handleInitialLoad() {
    const confirmed = window.confirm('¿Confirma la carga inicial de productos a Firestore?');
    if (confirmed) {
      console.log('Exportando productos a Firestore...');
      setInitializing(true);
      exportProducts().then(() => {
        console.log('Exportación finalizada');
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
