import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
          path='/home'
          element={<div><h2>Inicio</h2></div>} />
        <Route 
          path='/category'
          element={<div><h2>Catálogo Principal de Productos</h2></div>} />
        <Route 
          path='/category/:categoryId'
          element={<div><h2>Productos de la Categoría</h2></div>} />
        <Route
          path='/detail/:itemId'
          element={<div><h2>Detalle de Ítem</h2></div>} />
        <Route 
          path='/orders' 
          element={<div><h2>Mis compras</h2></div>} />
        <Route 
          path='/cart' 
          element={<div><h2>Carrito de Compras</h2></div>} />
        <Route 
          path='*' 
          element={<div><h2>Error 404: No encontramos resultados</h2></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
