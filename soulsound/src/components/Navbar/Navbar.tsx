"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { NavbarStyles } from "./NavbarStyles";
import { useStateContext } from "../../../context/StateContext";
import Cart from "../Cart/Cart";
import { useRouter } from "next/router";

const Navbar2 = styled(NavbarStyles)`
  background-color: #181818;
`;

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setVisible(visible);
      setPrevScrollPos(currentScrollPos);

      if (currentScrollPos === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {isHomePage ? (
        <NavbarStyles
          className={`navbar ${isTop ? "navbar-top" : "visible"} ${
            !visible ? "navbar-scrolled" : ""
          }   px-6 py-6 md:px-12`}
        >
          <div className="container">
            <p className="logo">
              <Link href="/">SOULSOUND</Link>
            </p>
            <button
              type="button"
              className="cart-icon"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShopping />
              <span
                className={`cart-item-qty ${
                  totalQuantities === 0 ? "empty" : ""
                }`}
              >
                {totalQuantities}
              </span>
            </button>
          </div>
        </NavbarStyles>
      ) : (
        <Navbar2 className="navbar px-6 py-6 md:px-12">
          <div className="container">
            <p className="logo">
              <Link href="/">SOULSOUND</Link>
            </p>
            <button
              type="button"
              className="cart-icon"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShopping />
              <span
                className={`cart-item-qty ${
                  totalQuantities === 0 ? "empty" : ""
                }`}
              >
                {totalQuantities}
              </span>
            </button>
          </div>
        </Navbar2>
      )}
      <Cart />
    </>
  );
};

export default Navbar;
