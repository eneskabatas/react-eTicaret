import React from 'react'
import "./hero.css"

const Hero = (props) => {
  return (
    <>
    <section className='heroContainer'> {props.children} </section>
    </>
  )
}

export default Hero