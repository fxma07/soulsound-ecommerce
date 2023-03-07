import React from "react";
import Link from "next/link";
import { FooterBannerStyles } from "./FooterBannerStyles";

import { urlFor } from "../../../lib/client";

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

type footerProps = {
  footerBanner: BannerType;
};

const FooterBanner = ({ footerBanner }: footerProps) => {
  const {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  } = footerBanner;
  return (
    <FooterBannerStyles className="footer-banner-container container mx-auto">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className="footer-banner-image" />
      </div>
    </FooterBannerStyles>
  );
};

export default FooterBanner;
