import styled from "styled-components";

export const NavbarStyles = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  color: #fafbfa;
  .container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .logo {
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 1.5rem;
  }

  .cart-icon {
    font-size: 2rem;
    cursor: pointer;
    position: relative;
    transition: transform 0.4s ease;
    border: none;
    background-color: transparent;
  }

  .cart-icon:hover {
    transform: scale(1.1, 1.1);
  }

  .cart-item-qty {
    position: absolute;
    top: -4px;
    right: -8px;
    font-size: 12px;
    color: #eee;
    background-color: #f02d34;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    text-align: center;
    font-weight: 600;
  }
`;
