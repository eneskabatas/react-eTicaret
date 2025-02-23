import React, { useContext } from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartProvider'

const Sidebar = () => {
  const {scrollToTop} = useContext(CartContext)
  return (
    <div className='sidebarContainer'> 
    <h3>Kategoriler</h3>
        <ul>
            <li ><Link to="/" onClick={scrollToTop}>Anasayfa</Link> </li>
            <li ><Link to="/erkek" onClick={scrollToTop}>Erkek Ürünleri</Link> </li>
        </ul>
     </div>
  )
}

export default Sidebar