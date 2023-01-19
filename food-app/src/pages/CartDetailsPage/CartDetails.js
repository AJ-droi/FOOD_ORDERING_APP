import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import  CartInfo from '../../components/CartDetails/CartInfo'

const CartDetails = () => {
  return (
    <div>
        <Navbar />
        <CartInfo/>
        <Footer />

    </div>
  )
}

export default CartDetails