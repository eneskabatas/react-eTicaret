import React from 'react'
import "./products.css"

const Products = (props) => {
  return (
    <>
    <main className='productsContainer'>
        <ul className='products'> {props.children} </ul>
    </main>
    </>
  )
}

export default Products