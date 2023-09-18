import { client } from "./client";

export const getProducts = async (category: string) => {
  let products;
  category == "allproducts"
    ? (products = await client.fetch(
        `*[_type == "products"]{
                _id,
                name,
                slug,
                price,
            "image": image.asset->url
            }`
      ))
    : (products = await client.fetch(
        `*[_type == "products" && category == "${category}"]{
            _id,
            name,
            slug,
            price,
        "image": image.asset->url
        }`
      ));
  return products;
};

export const getProduct = async (slug: string) => {
  const product = await client.fetch(
    `*[_type == "products" && slug == "${slug}"]{
        _id,
        name,
        slug,
        description,
        price,
        category,
        "image": image.asset->url,
        sizes
    }`
  );
  return product;
};
