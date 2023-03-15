import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { NavbarStyles } from "./NavbarStyles";
import { useStateContext } from "../../../context/StateContext";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const handleOpen = () => {};
  return (
    <>
      <NavbarStyles className="navbar-container">
        <nav className="navbar container">
          <p className="logo">
            <Link href="/">SOULSOUND</Link>
          </p>
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </nav>
      </NavbarStyles>
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
