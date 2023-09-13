"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { cartActions } from "@/store/slice/cartSlice";
const Cart = () => {
  const cartValue = useSelector((state: any) => state.cart.totalQuantity);
  const cartItems = useSelector((state: any) => state.cart.items);
  const totalAmount = useSelector((state: any) => state.cart.totalAmount);
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const removeFromcart = (productId: string) => {
    dispatch(
      cartActions.removeFromCart({
        productId: productId,
      })
    );
  };
  return (
    <>
      <div className="w-[80vw] mx-auto mb-10">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Shopping Cart
        </h2>
        <div className=" mt-10 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between">
          <div className="cart-items flex relative space-y-6">
            {cartItems.map((item: any) => (
              <div
                className="cart-item flex flex-col md:flex-row w-[80vw] justify-center items-center space-y-4 md:space-y-0 md:space-x-4 md:w-[50vw]"
                key={item.id}
              >
                <div className="cart-item__image">
                  <Image
                    className=" rounded-md"
                    src={item.productImage}
                    width={200}
                    height={200}
                    alt={"alt-text"}
                  />
                </div>
                <div className="item-details space-y-3 text-center">
                  <h3 className="flex space-x-4 md:space-x-3 scroll-m-20 text-2xl font-semibold tracking-tight">
                    <span>{item.name}</span>
                    <AiFillDelete
                      size={20}
                      className=" cursor-pointer"
                      onClick={() => {
                        removeFromcart(item.id);
                      }}
                    />
                  </h3>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-gray-400">
                    {item.type}
                  </h4>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Delivery Estimation
                  </h4>
                  <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-yellow-300">
                    5 Working Days
                  </h4>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    ${item.price}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary bg-gray-100 p-8 w-[80vw] md:w-[20vw] space-y-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
              Order Summary
            </h3>
            <div className="quantity">
              <p className="leading-7 font-bold">Quantity</p>
              <p className="leading-7">{totalQuantity} Products</p>
            </div>
            <div className="amount">
              <p className="leading-7 font-bold">Sub total</p>
              <p className="leading-7">${totalAmount}</p>
            </div>
            <Button className="w-full">Checkout</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
