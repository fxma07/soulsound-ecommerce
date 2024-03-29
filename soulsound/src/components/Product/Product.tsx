import React from "react";
import Link from "next/link";
import { urlFor } from "../../../lib/client";
import { ProductType } from "../../pages";
import { ProductStyles } from "./ProductStyles";
import Image from "next/image";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product: { image, slug, name, price } }: ProductProps) => {
  return (
    <ProductStyles>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image
            alt={name}
            src={urlFor(image && image[0])}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </ProductStyles>
  );
};

export default Product;
