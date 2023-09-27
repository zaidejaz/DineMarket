import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import Newsletter from '@/components/home/Newsletter'
import Products from '@/components/home/Products'
import Promotions from '@/components/home/Promotions'
import React from 'react'
const Home = () => {
  return (
    <>
      <Hero />
      <Promotions />
      <Products />
      <About />
      <Newsletter />
    </>
  )
}

export default Home