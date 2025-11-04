import './ItemDetail.css'

function ItemDetail({ item }) {
  //const { addToCart } = useContext(cartContext)

  const handleAddToCart = () => {
    //addToCart(item)
  }

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
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemDetail
