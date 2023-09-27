import React from 'react'
import Image from 'next/image'
import { Button } from '../../../components/ui/button'
import { AiFillShopping } from 'react-icons/ai'
const Hero = () => {
  return (
<section className='w-[80vw] mx-auto flex justify-center items-center min-h-screen overflow-hidden '>
        <div className="w-[100%] flex flex-col space-y-8 lg:w-[50vw]">
          <p className='text-blue-700 font-bold items-center text-center border rounded-md bg-blue-200 w-[30vw] text-sm p-1 md:w-24'>Sale 70%</p>
          <h1 className="w-full text-5xl font-extrabold tracking-tight md:text-5xl">
            An industrial Take on StreetWears
          </h1>
          <p className="leading-7 text-lg text-gray-500 w-[80%] ">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
          </p>
          <Button className='w-[70vw] text-xl font-bold p-8 md:w-[40vw] md:mx-0 lg:w-[20vw]'>
            <AiFillShopping size={25} className='mx-1 text-white' />
            Start Shopping
          </Button>
          <div className="flex space-x-8">
            <div className='flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0'>
              <Image src="/Featured1.webp" width={100} height={100} alt="Bazaar" />
              <Image src="/Featured2.webp" width={100} height={100} alt="Bazaar" />
            </div>
            <div className='flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0'>
              <Image src="/Featured3.webp" width={100} height={100} alt="Bazaar" />
              <Image src="/Featured4.webp" width={100} height={100} alt="Bazaar" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <div className='bg-[#ffece3] rounded-full overflow-hidden'>
            <Image src="/header.webp" width={600} height={600} alt="Dine Market" />
          </div>
        </div>
      </section>  )
}

export default Hero