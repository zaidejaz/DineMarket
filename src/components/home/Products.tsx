import React from 'react'
import SimpleSlider from '../Slider'

const Products = () => {
  return (    
    <section className='flex flex-col justify-center overflow-hidden items-center space-y-8 min-h-screen'>
    <div className="flex flex-col items-center justify-center product-text">
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-blue-700 font-bold">
        Products
      </p>
      <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
        Check What We Have
      </h2>
    </div>
    <div>
      <SimpleSlider />
    </div>
  </section>  )
}

export default Products