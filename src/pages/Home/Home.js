import React from 'react'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Post from '../../components/Post/Post'
import Review from '../../components/Review/Review'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Post />
        <Review />
        <Footer />
    </div>
  )
}

export default Home