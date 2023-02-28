import React from "react";
import Link from "next/link";
import { urlFor } from "../../../lib/client";
import { ProductStyles } from "./ProductStyles";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <ProductStyles>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img src={urlFor(image && image[0])} className="product-image" />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </ProductStyles>
  );
};

export default Product;
