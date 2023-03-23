import React from "react";
import { client } from "../../lib/client";
import { Product, HeroBanner, ImageGrid } from "../components";

export type ProductType = {
  _id: string;
  image: string[];
  name: string;
  slug: { current: string };
  price: number;
  details: string;
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
      <section className="px-6 py-10 md:px-12 md:py-20">
        <div className="container mx-auto">
          <div className="products-heading mb-12">
            <h2>Best Sellers</h2>
          </div>
          <div className="container mx-auto">
            <div className="products-container grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 md:gap-5 md:place-items-center lg:grid-cols-4 lg:place-items-center">
              {products?.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData: BannerType[] = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
