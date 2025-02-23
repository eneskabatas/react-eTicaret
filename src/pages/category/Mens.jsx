import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'
import Section from '../../components/section/Section'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Sidebar from '../../components/sidebar/Sidebar'
import Products from '../../components/products/Products'
import ProductItem from '../../components/products/ProductItem'

const Mens = () => {
    const { mens } = useContext(CartContext)
    return (
        <>
            <Hero>
                <div style={{width:"100%",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h2>Erkek Ürünleri</h2>
                </div>
            </Hero>
            <Sidebar />
            <Section>
              <Products>
                {
                    mens.map((men)=>{
                        return <ProductItem item={men} key={men.id}/>
                    })
                }
              </Products>
            </Section>
            <Footer />
        </>
    )
}

export default Mens