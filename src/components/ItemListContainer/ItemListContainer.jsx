import './ItemListContainer.css'

function ItemListContainer(props) {
  console.log('Cargo componente: ItemListContainer'); // TODO: Eliminar debug

  return (
    <section>
      {<h3>{props.greeting}</h3>}
    </section>
  )
}

export default ItemListContainer
