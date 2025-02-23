import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../context/CartProvider';

const NavbarBtn = () => {

  const {setCartShow,items} = useContext(CartContext)

  const totalItemCard = items.reduce((accumulator,currentItem)=>{
    return accumulator + currentItem.amount
  },0)

  //accumulator: geçici toplam
  //currentItem: işlenen ögeyi tutar

  const showCartHandler = () => {
    setCartShow(true)
  }

  return (
    <>
    <button className='navBtn' onClick={showCartHandler}>
        <span> <FaShoppingCart className='icon' /> </span>
        <span>Sepetim</span>
        
          {
            totalItemCard > 0 && <span className='badge'> {totalItemCard} </span>
          }
        
    </button>
    </>
  )
}

export default NavbarBtn