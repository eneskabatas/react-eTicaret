import React, { useContext } from 'react'
import Hero from '../../components/hero/Hero'
import { Link } from 'react-router-dom'
import hero from "../../assets/img/hero.png"
import "./homepage.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Section from '../../components/section/Section'
import Products from '../../components/products/Products'
import products from "../../dummyData/productData"
import ProductItem from '../../components/products/ProductItem'
import Footer from '../../components/footer/Footer'
import { CartContext } from '../../context/CartProvider'

const Homepage = () => {

  const {datas} = useContext(CartContext)


  const productList = datas.map((item)=> <ProductItem key={item.id} item={item} /> )

  return (
    <>
    <Hero>
        <div className='homepageHero'>
            <div className='heroSlogan'>
                <span>Yılın Fırsatları 🎉</span>
                <h2>İndirim Başladı</h2>
                <Link to="/" className='linka'> Keşfet </Link>
            </div>
            <div className='homeHeroImg'>
                <img src={hero} alt="" className='heroImg' />
            </div>
        </div>
    </Hero>
    <Sidebar/>
    <Section>
      <Products>
        {productList}
      </Products>
    </Section>
    <Footer/>
    </>
  )
}

export default Homepage