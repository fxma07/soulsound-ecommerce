import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  /* will-change: transform; */
  transition: all 1s ease-in-out;

  .cart-container {
    height: 100vh;
    width: 600px;
    background-color: white;
    float: right;
    padding: 40px 10px;
    position: relative;
  }

  .cart-heading {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    gap: 2px;
    margin-left: 10px;
    border: none;
    background-color: transparent;
  }

  .cart-heading .heading {
    margin-left: 10px;
  }
  .cart-num-items {
    margin-left: 10px;
    color: #f02d34;
  }
  .empty-cart {
    margin: 40px;
    text-align: center;
    align-items: center;
  }
  .empty-cart h3 {
    font-weight: 600;
    font-size: 20px;
  }

  .product-container {
    margin-top: 15px;
    overflow: auto;
    max-height: 70vh;
    padding: 20px 10px;
  }
  .product {
    display: flex;
    gap: 30px;
    padding: 20px;
  }
  .product .cart-product-image {
    width: 180px;
    height: 150px;
    border-radius: 15px;
    background-color: #ebebeb;
  }
`;
