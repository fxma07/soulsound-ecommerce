import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { AiOutlineShopping } from "react-icons/ai";
import { NavbarStyles } from "./NavbarStyles";
import { useStateContext } from "../../../context/StateContext";
import Cart from "../Cart/Cart";
import { useRouter } from "next/router";

interface StyledComponentProps {
  isHomePage: boolean;
}

const Navbar2 = styled(NavbarStyles)<StyledComponentProps>`
  background-color: ${(props) =>
    props.isHomePage ? "transparent" : "#181818"};
`;

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const router = useRouter();

  const isHomePage = router.pathname === "/";

  return (
    <>
      <Navbar2
        isHomePage={isHomePage}
        className="navbar-container px-6 py-10 md:px-12git"
      >
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
      </Navbar2>

      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
