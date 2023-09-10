"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getProduct } from "../../../../sanity/lib/query";

const Productpage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const product = await getProduct(params.id);
      setProduct(product);
      console.log(product);
    }
    fetchProducts();
  }, [params.id]);

  return (
    <>
      {product.map((item:any) => (
        <div className="text-gray-600 body-font overflow-hidden" key={item.id}>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image
                src={item.image}
                width={400}
                height={400}
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto rounded"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-3">
                <h2 className="text-lg font-bold title-font text-gray-400 tracking-widest">
                  {item.type}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {item.name}
                </h1>
                <p className="leading-relaxed">{item.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a Size" />
                        </SelectTrigger>
                        <SelectContent>
                          {
                            item.sizes.map((size:any) => (
                              <SelectItem value={size}>{size}</SelectItem>
                            ))
                          }
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-36">
                  <div className="title-font font-medium text-2xl text-gray-900">
                    {`$${item.price}`}
                  </div>
                  {/* <AddToCart quantity={quantity} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Productpage;
