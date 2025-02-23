import React, { useContext } from 'react'
import "./offcanvas.css"
import OffCanvasCard from './OffCanvasCard'
import { CartContext } from '../../context/CartProvider'
import OffCanvasContainer from './OffCanvasContainer'

const OffCanvas = () => {

    const { setCartShow, items, totalAmount,clearItem } = useContext(CartContext)

    return (
        <>
            <OffCanvasContainer>
                <div className='cardHead'>
                    <h2>Sepetim</h2>
                    <a onClick={() => { setCartShow(false) }}  className='cardClose'> X </a>
                </div>

                <ul className='offCanvasCardItems'>
                    {
                        items.map((product) => {
                            return (
                                <OffCanvasCard key={product.id} product={product} />
                            )
                        })
                    }

                </ul>
                {
                    items.length == 0 ? <div className='basket'>Sepetiniz Boş</div> : 
                       <>
                        <div className='total'>
                            <span> Toplam Değer </span>
                            <span> {totalAmount} TL </span>
                        </div>
                        <div className='actions'>
                        <a href="/order"> <button className='cardOrder'> Sipariş Ver </button></a>
                            <button onClick={clearItem} className='cardClear'> Sepeti Temizle </button>
                        </div>
                       </>
                }

            </OffCanvasContainer>

        </>
    )
}

export default OffCanvas