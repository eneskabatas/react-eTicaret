import React, { useContext } from 'react'
import Hero from '../../components/hero/Hero'
import Sidebar from '../../components/sidebar/Sidebar'
import Section from '../../components/section/Section'
import { CartContext } from '../../context/CartProvider'
import Footer from '../../components/footer/Footer'
import "./order.css"
import OrderCard from './OrderCard'
import { Link } from 'react-router-dom'

const Order = () => {
  const { items, changeName, changeCartNbr, handleOrderBtn, catchTitle, alertShow, changeCcv, totalAmount, scrollToTop } = useContext(CartContext)




  return (
    <>
      <Hero>
        <div className='orderHeroContainer'>
          <h1>ödeme</h1>
        </div>
      </Hero>
      <Sidebar />
      <Section>
        <div className='orderSectionContainer'>
          {
            items.map((item) => {
              return (
                <OrderCard item={item} />
              )
            })
          }
          {
            totalAmount == 0 ?
              <>
                <div style={{
                  height: "80vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <h2>sepetinizde ürün bulunmuyor</h2>
                  {/* <h3>Alışverişinize </h3> */}
                  <Link onClick={scrollToTop} to="/">Buraya Tıklayarak</Link>
                  <h3>Alışverişinize Devam edebilirsiniz</h3>

                </div>
              </>

              :
              <>
                <h2> toplam fiyat : {totalAmount} tl </h2>

                <div className='formContainer'>
                  <form>
                    <h3>Lütfen Bilgilerinizi Girin</h3>
                    <div className='inputGroup'>
                      <input type="text" placeholder='isim soyisim' onChange={changeName} /><br />
                      <input type="text" placeholder='Kart Numarası' onChange={changeCartNbr} /><br />
                    </div>
                    <div className='inputGroup'>
                      <input type="month" /><br />
                      <input type="text" placeholder='ccv' onChange={changeCcv} /><br />
                    </div>
                    <button onClick={handleOrderBtn}>Gönder</button>
                  </form>
                  {
                    alertShow && <div className='alert'>
                      <div className='alertTitle'>{catchTitle}</div>
                    </div>
                  }
                </div>

              </>
          }
        </div>
      </Section>
      <Footer />
    </>
  )
}

export default Order