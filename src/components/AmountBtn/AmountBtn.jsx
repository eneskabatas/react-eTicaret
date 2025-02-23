import React from 'react'
import "./amountBtn.css"

const AmountBtn = ({title, click}) => {
  return (
    <button className='amountBtn' onClick={click} > {title} </button>
  )
}

export default AmountBtn