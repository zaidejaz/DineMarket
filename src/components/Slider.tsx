"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "../../sanity/lib/query";


export default function SimpleSlider() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts("allproducts");
      console.log(products);
      setProducts(products);
    }
    fetchProducts();
  }, []);

  type Product = {
    image: string;
    name: string;
    price: number;
    slug: {
      current: string;
      _type: string;
    };
    _id: string;
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[80vw] mx-auto">
      <Slider {...settings}>
        {products.length > 0 &&
          products.map((product:Product) => (
            <Link href={`/product/${product.slug.current}`} className={"pb-12"} key={product._id}>
              <div className=" flex flex-col product-card space-y-2">
                <Image
                  src={product.image}
                  width={300}
                  height={300}
                  alt="Product"
                />
                <p className="leading-5 text-black font-bold">{product.name}</p>
                <p className="leading-5 text-black font-bold">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  );
}
