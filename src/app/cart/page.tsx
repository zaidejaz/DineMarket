import React from 'react'
import Image from 'next/image'
import { Button } from '../../../components/ui/button'

const Cart = () => {
    return (
        <>
            <div className='w-[80vw] mx-auto'>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Shopping Cart
                </h2>
                <div className=' mt-10 flex '>
                    <div className="cart-items space-y-6">
                        <div className="cart-item flex items-center space-x-4 w-[60vw]">
                            <div className="cart-item__image">
                                <Image className=" rounded-md" src="/product3.png" width={200} height={200} alt={"alt-text"} />
                            </div>
                            <div className="item-details space-y-3">
                                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                    Sweat Shirt
                                </h3>
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-gray-400">
                                    Dress
                                </h4>
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                    Delivery Estimation
                                </h4>
                                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-yellow-300">
                                    5 Working Days
                                </h4>
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                    $500
                                </h4>
                            </div>
                        </div>

                    </div>
                    <div className="order-summary bg-gray-100 p-8 w-[20vw] space-y-4">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                            Order Summary
                        </h3>
                        <div className="quantity flex space-x-16">
                            <p className="leading-7">
                                Quantity
                            </p>
                            <p className="leading-7">
                                2 products
                            </p>
                        </div>
                        <div className="quantity flex space-x-16">
                            <p className="leading-7">
                                Sub total
                            </p>
                            <p className="leading-7">
                                $4333
                            </p>
                        </div>
                        <Button className='w-full'>Checkout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart