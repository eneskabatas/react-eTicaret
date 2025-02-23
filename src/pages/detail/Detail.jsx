import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../dummyData/productData'
import Hero from '../../components/hero/Hero'
import Sidebar from "../../components/sidebar/Sidebar"
import Section from "../../components/section/Section"
import Footer from "../../components/footer/Footer"
import "./detail.css"
import { CartContext } from '../../context/CartProvider'
import axios from 'axios'

const Detail = () => {

    const { id } = useParams()
    const [detailProduct, setDetailProduct] = useState([])
    const {addItem} = useContext(CartContext)

    // useEffect(() => {
    //     const foundProduct = products.find((item) => item.id === parseInt(id))
    //     setDetailProduct(foundProduct)
    // }, [id, products])
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            setDetailProduct(response.data)
        })
    }, [id])

    return (
        <>
            <Hero>
                <div className='detailContainer'>
                    <h1> {detailProduct.title} </h1>
                </div>
            </Hero>
            <Sidebar/>
            <Section>
                <div className='detailSectionContainer'>
                    <div className='detailProduct'>
                        <div className='detailImgContainer'>
                            <img src={detailProduct.image} alt="" />
                        </div>
                        <div className='detailTitleContainer'>
                            <h3> {detailProduct.title} </h3>
                            <p> {detailProduct.desciription} </p>
                            <h5> {detailProduct.price} TL </h5>
                            <button onClick={()=>{addItem(detailProduct)}}>Sepete Ekle</button>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />

        </>
    )
}

export default Detail