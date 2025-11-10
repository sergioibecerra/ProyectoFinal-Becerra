import './NavBar.css'
import { Link } from 'react-router'
import homeLogo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={homeLogo} alt="Logo" className="logo" />
          </Link>
        </div>
        
        {/* Menu */}
        <ul className="navbar-menu">
          <li><Link to='/category'>Todas las categorías</Link></li>
          <li><Link to='/category/search?categoryCode=cat01'>Remeras</Link></li>
          <li><Link to='/category/search?categoryCode=cat02'>Calzado</Link></li>
          <li><Link to='/category/search?categoryCode=cat03'>Camping</Link></li>
          <li><Link to='/category/search?categoryCode=cat04'>Pesca</Link></li>
          <li><Link to='/offers'>Ofertas</Link></li>
        </ul>

        {/* Cart */}
        <div className="navbar-right">
          <Link to="/orders" className="navbar-orders">
            Mis Compras
          </Link>
          <div className="navbar-cart">
            <Link to='/cart'><CartWidget /></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
