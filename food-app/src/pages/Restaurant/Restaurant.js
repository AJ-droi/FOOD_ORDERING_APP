import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import RestaurantContainer from '../../components/RestaurantContainer/RestaurantContainer'

const Restaurant = () => {
  return (
    <div>
        <Navbar />
        <RestaurantContainer />
        <Footer />

    </div>
  )
}

export default Restaurant