import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'
import AmountBtn from '../AmountBtn/AmountBtn'

const OffCanvasCard = ({product}) => {

    // const {img,name,price,amount} = product
    const {image,title,price,amount} = product

    const {removeItem,incrementAmount,decrementAmount} = useContext(CartContext)


    const deleteHandler = (e) => {
        e.preventDefault()
        removeItem(product.id)
    }

  return (
    <>
    <li className='offCardItem' >

        <div className='offCardImg'>
            <img src={image} alt="" />
        </div>

        <div className='offCardInfo'>
            <div className='offCardText'>
                <b> {title} </b>
                <div className='priceGroup'>
                    <span>{price} TL x </span>
                    <AmountBtn title="+" click={()=>incrementAmount(product.id)} />
                    <span> {amount} </span>
                    <AmountBtn title="-" click={()=>decrementAmount(product.id)} />
                </div>
            </div>
            <a href='' onClick={deleteHandler} className='offCardRemove' > X </a>
        </div>

    </li>
    </>
  )
}

export default OffCanvasCard