import React, { useContext } from 'react'
import "./navbar.css"
import NavbarBtn from './NavbarBtn'
import { Outlet } from 'react-router-dom'
import { CartContext } from '../../context/CartProvider'

const Navbar = () => {
  const {changeSearch} = useContext(CartContext)
  return (
    <>
    <nav className='navbarContainer'>
        <h1>Pncr Mağaza</h1>
        <input type="search" placeholder='Ara..' className='search' onChange={changeSearch} />
        <NavbarBtn/>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar