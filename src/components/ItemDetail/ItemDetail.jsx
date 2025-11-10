import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({ item }) {
  //const { addToCart } = useContext(cartContext)

  return (
    <div className='item-detail'>
      <img width="300" src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Categoría: {item.categoryName}</p>
      <p>Marca: {item.brandName}</p>
      <p>SKU: {item.sku}</p>
      <h3>
        Precio: ${item.price.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
        {item.price != item.basePrice ? <span>{` (${Math.round((item.basePrice-item.price)/item.basePrice*100)}% off)`}</span> : ""}
      </h3>     
      <p>Cantidad disponible: {item.stock}</p>     
      {/*<ItemCount available={item.stock} />*/}
      <ItemCount available={item.stock} />
    </div>
  )
}

export default ItemDetail
