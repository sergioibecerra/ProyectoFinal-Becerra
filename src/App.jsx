import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'

import CartProvider  from './context/cartContext'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import OrderListContainer from './components/OrderListContainer/OrderListContainer'
import CartContainer from './components/CartContainer/CartContainer'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route 
            path='/'
            element={<ItemListContainer greeting='Todas las categorías' />} />
          <Route 
            path='/category'
            element={<ItemListContainer greeting='Todas las categorías' />} />
          <Route 
            path='/category/:categoryId'
            element={<ItemListContainer greeting='Categoría' />} />
          <Route
            path='/detail/:itemId'
            element={<div><h2>Detalle de Ítem</h2></div>} />
          <Route 
            path='/orders' 
            element={<OrderListContainer />} />
          <Route 
            path='/cart' 
            element={<CartContainer />} />
          <Route 
            path='*' 
            element={<div><h3>Error 404: No encontramos resultados</h3></div>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
