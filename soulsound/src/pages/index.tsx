import React from "react";
import { client } from "../../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

type ProductType = {
  _id: string;
  image: string[];
  name: string;
  slug: { current: string };
  price: number;
};

type BannerType = {
  image: string;
  buttonText?: string;
  product?: string;
  desc?: string;
  smallText?: string;
  midText?: string;
  largeText1?: string;
  largeText2?: string;
  discount?: string;
  saleTime?: string;
};

type HomeProps = {
  products: ProductType[];
  bannerData: BannerType[];
};

const Home = ({ products, bannerData }: HomeProps) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData && bannerData[1]} />
      <div className="products-heading">
        <h2>Best Seller</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products.map((product: ProductType) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products: ProductType[] = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData: BannerType[] = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
