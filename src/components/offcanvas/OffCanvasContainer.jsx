import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'
import ReactDOM from "react-dom"

const OffCanvasContainer = (props) => {

    const {setCartShow} = useContext(CartContext)

    const portalElement = document.getElementById("overlays")

    const Backdrop = () => {
        return <div onClick={()=>{setCartShow(false)}} className='backdrop'/>
    }

    const OffCanvasOverlay = (props) => {
        return (
            <div className='offcanvas'>
                <div className='content'>
                    {props.children}
                </div>
            </div>
        )
    }

    return (
        <>
            {
                ReactDOM.createPortal(<Backdrop/> , portalElement)
            }
            {
                ReactDOM.createPortal(<OffCanvasOverlay> {props.children} </OffCanvasOverlay>, portalElement)
            }
            
        </>
    )
}

export default OffCanvasContainer