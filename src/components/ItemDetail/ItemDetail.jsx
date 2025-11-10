import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({ item }) {
  return (
    <div className='item-detail'>
      <img src={item.image} alt={item.title} />
      <div className='item-detail-body'>
        {item.featured ? <p className='item-featured'>MÁS VENDIDO</p> : ""}
        <p className='item-title'>{item.title}</p>
        <p>{item.description}</p>
        <p>Categoría: {item.categoryName}</p>
        <p>Marca: {item.brandName}</p>
        <p style={{marginBottom: '1rem'}}>SKU: {item.sku}</p>

        {item.price != item.basePrice ? <p className='item-base-price'>Desde ${item.basePrice.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p> : ""}
        <div className='item-price-container'>
          <p className='item-price'>${item.price.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
          {item.price != item.basePrice ? <p className='item-offer'>{Math.round((item.basePrice-item.price)/item.basePrice*100)}% off</p> : ""}
        </div>

        <p style={{fontSize: '0.875rem', marginTop: '-1rem'}}>Cantidad disponible: {item.stock}</p>
      </div>    
    
      <ItemCount item={item} />
    </div>
  )
}

export default ItemDetail
