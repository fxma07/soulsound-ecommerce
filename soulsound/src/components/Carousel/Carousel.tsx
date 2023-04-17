import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { ProductType } from "../../pages";
import { Product } from "../../components/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderProps = {
  products: ProductType[];
};

interface CustomWindow extends Window {
  customProperty: string;
}

type responsiveProps = {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll: number;
    infinite: boolean;
    dots: boolean;
    initialSlide: number;
  };
};

interface SliderSettings {
  className: string;
  centerMode: boolean;
  infinite: boolean;
  centerPadding: string;
  slidesToShow: number;
  speed: number;
  responsive: responsiveProps[];
}

const Carousel = ({ products }: SliderProps) => {
  const settings: SliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.map((product: ProductType) => (
        <Product key={product._id} product={product} />
      ))}
    </Slider>
  );
};

export default Carousel;
