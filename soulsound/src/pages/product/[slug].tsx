"use client";
import React, { useState } from "react";
import { client, urlFor } from "../../../lib/client";
import { ProductPage } from "./productPageStyles";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { Product } from "../../components";
import { useStateContext } from "../../../context/StateContext";

type ProductType = {
  _id: string;
  image: string[];
  name: string;
  details: string;
  price: number;
  slug: {
    current: string;
  };
};

type Props = {
  product: ProductType;
  products: ProductType[];
};

const ProductDetails = ({ product, products }: Props) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);

  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <ProductPage className="mx-auto container">
      <div className="product-detail-container justify-center">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((image, i) => (
              <img
                key={i}
                src={urlFor(image)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1 className="text-3xl">{name}</h1>
          <div className="reviews">
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper mx-auto">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike=products-container flex container mx-auto justify-center gap-3 flex-wrap">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </ProductPage>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product: ProductType) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};
export default ProductDetails;
