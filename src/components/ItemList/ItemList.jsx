import './ItemList.css'
import { Link } from "react-router"

function ItemList(props) {
  
  const handleDetailClick = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())
  }

  return (
    <div className='item-list'>
      <h2>{props.title}</h2>

      {props.price != props.basePrice ? <p>Desde <s>${props.basePrice.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</s></p> : ""}
      <h3>Precio: ${props.price.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h3>
      {props.price != props.basePrice ? <p>{Math.round((props.basePrice-props.price)/props.basePrice*100)}% off</p> : ""}

      <Link to={`/detail/${props.id}`} onClick={handleDetailClick}>
        <button>Detalles del producto</button>
      </Link>
    </div>
  )
}

export default ItemList
