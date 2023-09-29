"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../../../../sanity/lib/query";


const ProductByCategory = ({ params }: { params: { slug: string } }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts(params.slug);
      setProducts(products);
    }
    fetchProducts();
  }, [params.slug]);
  return (
    <>
      <div className="product-card grid grid-cols-1 md:grid-cols-2 md:gap-4 w-9/12 mx-auto mt-16 lg:w-[11/12] lg:grid-cols-4">
        {products.length > 0 ? (
          products.map((product: any) => (
            <Link key={product._id} href={`/product/${product.slug.current}`}>
              <div className="product-card space-y-2 mb-6">
                <Image
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.name}
                />
                <p className="leading-5 text-black font-bold">{product.name}</p>
                <p className="leading-5 font-bold text-gray-500">
                  {product.type}
                </p>
                <p className="leading-5 text-black font-bold">
                  {`$${product.price}`}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-7xl w-[80vw] h-[80vh] items-center flex justify-center text-cent">
            No Products Found
          </p>
        )}
      </div>
    </>
  );
};

export default ProductByCategory;
