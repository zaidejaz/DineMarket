import React from 'react'
import Image from 'next/image'
import { Button } from '../../../components/ui/button'

const Promotions = () => {
  return (
<section className='w-[80vw] mx-auto flex flex-col items-center justify-center min-h-screen space-y-4'>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-blue-700 font-bold">
          Promotion
        </p>
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors">
          Our Promotions Events
        </h2>
        <div className='flex flex-col space-y-2 md:space-y-[4vw] lg:flex-row lg:space-y-0 lg:space-x-2'>
          <div className='space-y-[4vw] lg:space-y-2'>
            <div className='flex flex-col overflow-hidden bg-[#d6d6d8] justify-center items-center w-[90vw] h-[30vh] md:w-[80vw] md:flex-row md:h-[20vh] md:p-4 lg:w-[40vw] lg:h-[30vh]'>
              <div className='flex flex-col items-center justify-center mt-8 md:w-[40vw]'>
                <h2 className="scroll-m-20 text-lg md:text-4xl font-semibold tracking-tight transition-colors">
                  GET UPTO 60%
                </h2>
                <p className='md:text-xl'>
                  For the Summer Season
                </p>
              </div>
              <div className='mt-auto'>
                <Image className='mt-4 w-[40vw]' src={"/event1.webp"} width={250} height={250} alt='Event' />
              </div>
            </div>
            <div className='flex flex-col bg-[#212121] items-center justify-center w-[90vw] h-[30vh] md:w-[80vw] md:h-[20vh] md:space-y-3 lg:w-[40vw] lg:h-[30vh]'>
              <h2 className="scroll-m-20 text-lg font-semibold tracking-tight transition-colors first:mt-0 text-white md:text-4xl">
                Get 30% OFF
              </h2>
              <p className="leading-7 text-white">
                USE PROMO CODE
              </p>
              <Button>DINEWEEKENDSALE</Button>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-[4vw] lg:space-x-2 lg:space-y-0'>
            <div className='flex items-center flex-col bg-[#efe1c7] w-[90vw] md:w-[38vw] lg:w-[20vw] lg:space-y-3'>
              <p className="leading-7 mt-6 text-black">
                Flex SweatShirt
              </p>
              <div className='flex space-x-2'>
                <p className="leading-7 text-black line-through">
                  $100.00
                </p>
                <p className="leading-7 text-black font-bold">
                  $75.00
                </p>
              </div>
              <div className="mt-auto">
                <Image src={"/event2.webp"} height={250} width={250} alt='Event' />
              </div>
            </div>
            <div className='flex items-center flex-col w-[90vw] bg-[#d7d7d9] md:w-[38vw] lg:w-[20vw] lg:space-y-3'>
              <p className="leading-7 mt-6 text-black">
                Flex Push Button Bomber
              </p>
              <div className='flex space-x-2'>
                <p className="leading-7 text-black line-through">
                  $250.00
                </p>
                <p className="leading-7 text-black font-bold">
                  $190.00
                </p>
              </div>
              <div className="mt-auto">
                <Image className="flex flex-end" src={"/event3.webp"} height={250} width={250} alt='Event' />
              </div>
            </div>
          </div>
        </div>
      </section>  )
}

export default Promotions