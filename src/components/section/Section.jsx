import React from 'react'
import "./section.css"

const Section = (props) => {
  return (
    <>
    <div className='sectionContainer'> {props.children} </div>
    </>
  )
}

export default Section