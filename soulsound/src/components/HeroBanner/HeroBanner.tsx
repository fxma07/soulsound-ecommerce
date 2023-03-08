import React from "react";
import Link from "next/link";
import { HeroBannerSection } from "./HeroBannerStyles";

type BannerType = {
  heroBanner: {
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
};

const HeroBanner = ({ heroBanner }: BannerType) => {
  return (
    <HeroBannerSection className="py-24 px-24 flex  items-center">
      <div className="heading-wrapper container-lg text-center mx-auto ">
        <h1 className="mt-3 text-[4.5rem] font-bold leading-[4rem] tracking-tight text-white text-shadow">
          {heroBanner.largeText1}
        </h1>
        <p className="mt-5 text-lg leading-relaxed subtitle">
          Specify helps you unify your brand identity by collecting, storing and
          distributing design tokens and assets — automatically.
        </p>
      </div>
    </HeroBannerSection>
  );
};

export default HeroBanner;
