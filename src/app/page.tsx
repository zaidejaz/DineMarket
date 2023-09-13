import React from 'react'
import Image from 'next/image'
import { Button } from "../../components/ui/button"
import { Input } from '../../components/ui/input';
import SimpleSlider from '@/components/Slider';
import { AiFillShopping } from 'react-icons/ai'
const Home = () => {
  return (
    <>
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
      </section>
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
      </section>
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
      </section>
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
      </section>
      <section className="newsletter w-[80vw] mx-auto flex flex-col items-center justify-center overflow-hidden min-h-screen space-y-5 md:min-h-[30vh]">
        <div className='flex flex-col jusitfy-center items-center'>
          <h2 className="scroll-m-20 text-5xl font-semibold tracking-tight transition-colors first:mt-0">
            Subscribe our Newsletter
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Get the latest information and promo offers directly
          </p>
        </div>
        <div className="flex w-[full] max-w-sm lg:w-[30vw] items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </section>
    </>
  )
}

export default Home