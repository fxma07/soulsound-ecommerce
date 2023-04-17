import React from "react";
import Link from "next/link";
import { FooterSection } from "./FooterStyles";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterSection className="py-10 px-6 md:px-12 md:py-20">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="logo-wrapper">
            <p className="logo mb-10">
              <Link href="/">SOULSOUND</Link>
            </p>
          </div>
          <div className="footer-menu mb-10 md:mb-5 md:col-start-1 lg:col-start-2 lg:justify-self-end">
            <ul className="md:flex">
              <li className="mb-6 md:mr-10">
                <Link href="">Home</Link>
              </li>
              <li className="mb-6 md:mr-10">
                <Link href="/">Headphones</Link>
              </li>
              <li className="mb-6 md:mr-10">
                <Link href="">Speakers</Link>
              </li>
              <li>
                <Link href="">Earphones</Link>
              </li>
            </ul>
          </div>
          <div className="subtitle-wrapper md:col-start-1 md:col-span-2 lg:col-span-1">
            <p className="footer-subtitle">
              Soulsound is an all in one stop to fulfill youur audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
          </div>
          <div className="md:col-start-1">
            <p className="footer-subtitle mt-10 mb-10 md:mb-0 md:mt-20 lg:mt-20">
              Copyright 2023. All Rights Reserved.
            </p>
          </div>
          <div className="footer-icons flex mx-auto md:justify-self-end md:mx-0 md:mt-20 md:col-start-2 lg:col-start-2 lg:row-start-2 lg:place-items-end">
            <FaFacebookSquare className="footer-icon" />
            <FaTwitter className="footer-icon mx-4" />
            <FaInstagram className="footer-icon" />
          </div>
          <div className="copyright-wrapper grid grid-cols-1 md:grid-cols-2 lg:col-span-2"></div>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
