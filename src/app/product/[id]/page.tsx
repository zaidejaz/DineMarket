"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getProduct } from "../../../../sanity/lib/query";
import { Button } from "../../../../components/ui/button";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const Productpage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const product = await getProduct(params.id);
      console.log(product)
      setProduct(product);
      setPrice(product[0].price);
      setProductId(product[0]._id);
      setProductName(product[0].name);
      setProductImage(product[0].image);
      setType(product[0].type);
    }
    fetchProducts();
  }, [params.id]);
  
console.log(product)
  return (
    <>
      {product.map((item: any) => (
        <div className="text-gray-600 body-font overflow-hidden" key={item._id}>
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
                      <Select onValueChange={(newValue)=>{
                        setSize(newValue)
                      }}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a Size" />
                        </SelectTrigger>
                        <SelectContent>
                          {item.sizes.map((size: any) => (
                            <SelectItem value={size}>{size}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                  <div className="title-font font-medium text-2xl text-gray-900">
                    {`$${price}`}
                  </div>
                  <div className="flex gap-4">
                    <div className="flex gap-2">
                      <Button
                        variant={"outline"}
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                            setPrice(price - item.price);
                          }
                        }}
                      >
                        <MinusIcon />
                      </Button>
                      <Button variant={"outline"} disabled>
                        {quantity}
                      </Button>
                      <Button
                        variant={"outline"}
                        onClick={() => {
                          setQuantity(quantity + 1);
                          setPrice(price + item.price);
                        }}
                      >
                        <PlusIcon />
                      </Button>
                    </div>
                    <div
                      onClick={() => {
                        setQuantity(1);
                        setPrice(item.price);
                        console.log(quantity, price);
                      }}
                    >
                      <AddToCart
                        quantity={quantity}
                        price={price}
                        productId={productId}
                        productName={productName}
                        productImage={productImage}
                        size = {size}
                        type={type}
                      />
                    </div>
                  </div>
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
