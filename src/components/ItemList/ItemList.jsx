import './ItemList.css'
import { Link } from "react-router"

function ItemList(props) {
  // Guarda la posición actual del scroll antes de navegar
  const handleDetailClick = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())
  }

  return (
    <div className='item-list'>
      {props.featured ? <p className='item-featured'>MÁS VENDIDO</p> : ""}
      <p className='item-title'>{props.title}</p>

      {props.price != props.basePrice ? <p className='item-base-price'>Desde ${props.basePrice.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p> : ""}
      <div className='item-price-container'>
        <p className='item-price'>${props.price.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
        {props.price != props.basePrice ? <p className='item-offer'>{Math.round((props.basePrice-props.price)/props.basePrice*100)}% off</p> : ""}
      </div>
      
      <div className='item-button-container'>
        <Link  to={`/detail/${props.id}`} onClick={handleDetailClick}>
          <button className='item-button'>Detalles del producto</button>
        </Link>
      </div>
    </div>
  )
}

export default ItemList
