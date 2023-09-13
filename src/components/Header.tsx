"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineSearch, AiFillShopping } from 'react-icons/ai'
import { useSelector } from 'react-redux';
const Header = () => {
    const cartValue = useSelector(
        (state: any) => state.cart.totalQuantity
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleNavLinkClick = () => {
        closeMenu();
    };

    return (
        <>
            <header className="flex mx-auto my-8 w-10/12 lg:w-9/12 items-center">
                <Link href={"/"}>
                    <Image height={150} width={150} src="/logo.webp" alt="Dine Market" />
                </Link>
                <nav className=" ml-auto w-[100%] flex justify-center items-center lg:space-x-4">
                    <ul className="hidden w-[30vw] lg:flex space-x-10 items-center">
                        <li>
                            <Link href="/category/female" onClick={handleNavLinkClick}>
                                Female
                            </Link>
                        </li>
                        <li>
                            <Link href="/category/male" onClick={handleNavLinkClick}>
                                Male
                            </Link>
                        </li>
                        <li>
                            <Link href="/category/kids" onClick={handleNavLinkClick}>
                                Kids
                            </Link>
                        </li>
                        <li>
                            <Link href="/category/products" onClick={handleNavLinkClick}>
                                All Products
                            </Link>
                        </li>
                    </ul>
                    <div className="searchBar hidden w-72 px-2 mx-2 space-x-4 border rounded-sm h-[4vh] lg:flex lg:items-center">
                        <AiOutlineSearch
                            className="text-black"
                        />
                        <input className="w-full focus:outline-none" type="text" placeholder="Search" />
                    </div>
                    <div className=' ml-auto px-4'>
                        {!isMenuOpen && (
                            <Link href={"/cart"} className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
                            <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-4 text-white text-sm text-center">
                             {cartValue}
                            </span>
                            <AiFillShopping size={30}/>
                          </Link>
                        )}
                    </div>
                </nav>
                <div className="menu-icon ml-auto lg:hidden">
                    <button onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

            </header>
            {isMenuOpen && (
                <div className="menu z-50 fixed w-full h-full bg-white top-0 left-0">
                    <nav className="px-4 lg:px-14 py-6 lg:py-16">
                        <div className='flex p-4'>
                            <Link href={"/"} onClick={handleNavLinkClick}>
                                <Image height={150} width={150} src="/logo.webp" alt="Dine Market" />
                            </Link>
                            <div className="ml-auto">
                                <button onClick={toggleMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="searchBar w-[80vw] h-[6vh] px-2 mx-2 space-x-4 border rounded-sm flex items-center mb-4 lg:hidden">
                            <AiOutlineSearch
                                className="text-black"
                            />
                            <input className="w-full focus:outline-none" type="text" placeholder="Search" />
                        </div>
                        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8 items-center">
                            <div className="searchBar hidden h-8 w-56 px-2 mx-2 space-x-4 border rounded-sm lg:flex items-center">
                                <AiOutlineSearch
                                    className="text-black"
                                />
                                <input className="w-full focus:outline-none" type="text" placeholder="Search" />
                            </div>
                        </div>
                        <ul className="space-y-4 mt-4 w-11/12 mx-auto lg:mt-0">
                            <li className='text-2xl'>
                                <Link href="/category/female" onClick={handleNavLinkClick}>
                                    Female
                                </Link>
                            </li>
                            <li className='text-2xl'>
                                <Link href="/category/male" onClick={handleNavLinkClick}>
                                    Male
                                </Link>
                            </li>
                            <li className='text-2xl'>
                                <Link href="/category/kids" onClick={handleNavLinkClick}>
                                    Kids
                                </Link>
                            </li>
                            <li className='text-2xl'>
                                <Link href="/category/all-products" onClick={handleNavLinkClick}>
                                    All Products
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;
