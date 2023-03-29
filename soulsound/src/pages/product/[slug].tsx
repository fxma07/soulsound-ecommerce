import React, { useState } from "react";
import { client, urlFor } from "../../../lib/client";
import { useRouter } from "next/router";
import { ProductPage } from "./productPageStyles";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import Carousel from "../../components/Carousel/Carousel";
import { useStateContext } from "../../../context/StateContext";
import { ProductType } from "..";

type ProductPageProps = {
  product: ProductType;
  products: ProductType[];
};

const ProductDetails = ({ product, products }: ProductPageProps) => {
  const { image, details, price } = product;
  const [index, setIndex] = useState(0);

  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <ProductPage>
      <div className="product-detail-container container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          <div className="images-wrapper">
            <div className="image-container">
              <img
                src={urlFor(product.image && product.image[index])}
                className="product-detail-image"
              />
            </div>
            <div className="small-images-container">
              {image?.map((item, i) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className="product-detail-desc mt-5 col-span-2">
            <h1 className="text-3xl">{product.name}</h1>
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
            <div className="details-wrapper">
              <h4>Details: </h4>
              <p>{details}</p>
              <p className="price">${price}</p>
            </div>
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
      </div>
      <section className="mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              YOU MAY ALSO LIKE
            </h2>
          </div>
          <Carousel products={products} />
        </div>
      </section>
    </ProductPage>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {current}
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

interface ParamsProps {
  params: { slug: string };
}

export const getStaticProps = async ({ params: { slug } }: ParamsProps) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product" && slug.current != '${slug}']`;

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};
export default ProductDetails;
