"use client";
import React from "react";
import { Button } from "../../components/ui/button";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
const AddToCartButton = ({
  quantity,
  price,
  productId,
  productName,
  productImage,
  size,
  type,
}: {
  quantity: number;
  price: number;
  productId: string;
  productName: string;
  productImage: string;
  size: string;
  type: string;
}) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        quantity: quantity,
        price: price,
        item: {
          id: productId,
          name: productName,
          productImage: productImage,
          price: price,
          size: size,
          quantity: quantity,
          type: type,
        },
      })
    );
  };

  return <Button onClick={addToCart}>Add To Cart</Button>;
};

export default AddToCartButton;
