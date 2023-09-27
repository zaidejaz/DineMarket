import React from 'react'
import { Button } from '../../../components/ui/button'
import Image from 'next/image'


const About = () => {
  return (
    <section className='flex flex-col min-h-screen mt-10 overflow-hidden space-y-8 w-[80vw] mx-auto'>
    <div className='w-[80vw] mx-auto lg:w-[30vw] lg:mx-0 lg:ml-auto'>
      <h2 className="text-5xl font-bold tracking-tight transition-colors">
        Unique and Authentic Vintage Designer Jewellery
      </h2>
    </div>
    <div className='flex flex-col justify-center lg:flex-row  md:space-y-8 md:space-x-0 '>
      <div className='flex items-center w-[80vw] mx-auto md:w-[80vw] lg:w-[30vw]lg:space-x-38'>
        <div className='flex flex-col w-[80] mx-auto md:space-y-8 lg:w-[full] lg:space-y-2'>
        <div className='absolute font-bold text-7xl text-[#212121] opacity-10 w-[10vw] md:text-5xl lg:w-[30vw] lg:text-7xl lg:mt-4'>Different From Others</div>
          <div className='flex space-x-2'>
            <div className='w-[40vw] h-[20vh] md:w-[40vw] md:h-auto lg:w-[15vw]'>
              <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Using Good Quality Materials
              </h3>
              <p className='text-sm'>
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
            <div className='w-[40vw] h-[20vh] md:w-[40vw] md:h-auto lg:w-[15vw]'>
              <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
                100% Handmade Products
              </h3>
              <p className='text-sm'>
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className='flex space-x-3'>
            <div className='w-[40vw] h-[20vh] md:w-[40vw] md:h-auto lg:w-[15vw]'>
              <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Modern Fashion Design
              </h3>
              <p className='text-sm'>
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
            <div className='w-[40vw] h-[20vh] md:w-[40vw] md:h-auto lg:w-[15vw]'>
              <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Discount for Bulk Orders
              </h3>
              <p className='text-sm'>
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center space-y-4 md:flex-row w-[80vw] mx-auto  md:space-x-8 md:space-y-0'>
        <Image src={"/feature.webp"} width={250} height={250} alt='All Products' />
        <div className='space-y-4 flex flex-col items-center md:inline'>
          <p className="leading-7 [&:not(:first-child)]:mt-6 w-[80vw] md:w-[50vw] lg:w-[20vw]">
            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
          </p>
          <Button>See All Products</Button>
        </div>
      </div>
    </div>
  </section>  )
}

export default About