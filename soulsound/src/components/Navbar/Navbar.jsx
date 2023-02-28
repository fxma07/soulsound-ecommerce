import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { NavbarStyles } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarStyles className="navbar-container">
      <p className="logo">
        <Link href="/">SOULSOUND</Link>
      </p>
      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">2</span>
      </button>
    </NavbarStyles>
  );
};

export default Navbar;
