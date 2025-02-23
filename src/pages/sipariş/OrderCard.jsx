import React, { useContext } from 'react'
import "./ordercard.css"
import AmountBtn from '../../components/AmountBtn/AmountBtn'
import { CartContext } from '../../context/CartProvider'

const OrderCard = ({ item }) => {

    const {decrementAmount,incrementAmount,removeItem} = useContext(CartContext)
    

    return (
        <>
            <div className='orderCardContainer'>
                <div className='orderImgContainer'>
                    <img src={item.image} alt="" />
                </div>
                <div className='orderTitleContainer'>
                    <p>{item.title}</p>
                    <div className='orderBtn'>
                        <AmountBtn title="+" click={()=>incrementAmount(item.id)}/>
                        <p> {item.amount} </p>
                        <AmountBtn title=" - " click={()=>decrementAmount(item.id)} />
                    </div>
                <button className='clearBtn' onClick={()=>removeItem(item.id)}>Sepetten Sil</button>
                </div>
            </div>
        </>
    )
}

export default OrderCard