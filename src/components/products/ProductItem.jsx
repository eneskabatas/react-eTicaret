import React, { useContext } from 'react'
import "./productItem.css"
import { CartContext } from '../../context/CartProvider'
import { Link } from 'react-router-dom'

const ProductItem = ({item}) => {

    // const {name,desc,img,price} = item
    const {title,description,image,price} = item
    const {addItem} = useContext(CartContext)


  return (
    <>
    
    <li className='productCard'>
        <img src={image} alt="" className='productCardImg' />
        <h3 className='productCardTitle' > {title} </h3>
        <p className='productCardDesc'> {description} </p>
        <div className='productCardInfo'>
            <span className='productCardPrice'> {price} TL </span>
              <div className='btnContainer'>
                <Link to={ `/detail/${item.id}` }className='detailBtn'> <button className='addToCard'>Ürüne Git</button></Link>
                <button className='addToCard' onClick={()=>{addItem(item)}}>Sepete ekle</button>
              </div>
        </div>
    </li>
    
    </>
  )
}

export default ProductItem