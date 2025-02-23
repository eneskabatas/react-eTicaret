import React, { useContext, useEffect } from 'react'
import TopBtnPortal from './TopBtnPortal'
import { FaArrowTurnUp } from "react-icons/fa6";
import { CartContext } from '../../context/CartProvider';

const TopBtn = () => {

    const {scrollToTop, scrollY,setScrollControl,scrollControl} = useContext(CartContext)

    useEffect(() => {
        if (scrollY > 30) {
            setScrollControl(true)
        }
        else {
            setScrollControl(false)
        }
    }, [scrollY]
    )

  return (
    <>
    <TopBtnPortal>
        <div className={`topBtn ${scrollControl ? 'activeScroll' : "" }`} onClick={scrollToTop}> <FaArrowTurnUp/> </div>
    </TopBtnPortal>
    </>
  )
}

export default TopBtn