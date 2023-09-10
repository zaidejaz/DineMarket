"use client"
import React from 'react'
import {Button} from '../../components/ui/button'
import { useDispatch } from 'react-redux'
import {cartActions} from '@/store/slice/cartSlice'
const addToCartButton = ({quantity}:{quantity:number}) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addToCart({quantity}))
  }

  return (
    <Button onClick={addToCart}>Add To Cart</Button>
  )
}

export default addToCartButton