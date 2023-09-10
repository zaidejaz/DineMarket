import React from 'react'
import Image from 'next/image'
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className=' flex flex-col w-[80vw] mx-auto space-y-8 lg:flex-row lg:space-x-32 lg:space-y-0'>
        <div className='space-y-4'>
          <Image src={"/logo.webp"} height={200} width={200} alt="Dine Market" />
          <p className="leading-7 [&:not(:first-child)]:mt-6 w-[80vw] lg:w-[25vw] text-gray-500">
            Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
          </p>
          <div className="flex icons space-x-8">
            <Link href={"https://facebook.com"}>
              <FaFacebookF size={30} className="bg-gray-300 rounded-sm p-2"/>
            </Link>
            <Link href={"https://twitter.com"}>
            <FaTwitter  size={30} className="bg-gray-300 rounded-sm p-2"/>
            </Link>
            <Link href={"https://linkedin.com"}>
            <FaLinkedinIn size={30} className="bg-gray-300 rounded-sm p-2"/>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-500">
            Company
          </h3>
          <ul className='text-gray-500 leading-8'>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Terms Of Use</Link>
            </li>
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"}>How it Works</Link>
            </li>
            <li>
              <Link href={"/"}>Contact Us</Link> 
            </li>
          </ul>
        </div>
        <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-500">
            Support
          </h3>
          <ul className='text-gray-500 leading-8'>
            <li>
              <Link href={"/"}>Support Career</Link>
            </li>
            <li>
              <Link href={"/"}>24h Service</Link>
            </li>
            <li>
              <Link href={"/"}>Quick Chat</Link>
            </li>
          </ul>
        </div>
        <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-500">
            Contact
          </h3>
          <ul className='text-gray-500 leading-8'>
            <li>
              <Link href={"/"}>Whatsapp</Link>
            </li>
            <li>
              <Link href={"/"}>Support 24h</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center space-y-4 border-t-black border-t mt-16 p-4 lg:flex-row lg:space-x-72 lg:space-y-0'>
        <p>Copyright © 2022 Dine Market </p>
        <p>Design by. <b>Weird Design Studio</b></p>
        <p>Code by. <b><Link href={"https://github.com/zaidejaz"}>Zaid Ejaz</Link></b></p>
      </div>
    </footer>
  )
}

export default Footer