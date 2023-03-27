import styled from "styled-components";

export const ProductPage = styled.div`
  .product-detail-container {
    display: flex;
    padding: 6rem 0.75rem 0rem;
    color: #324d67;
  }

  .product-detail-image {
    border-radius: 15px;
    background-color: #ebebeb;
    width: 100%;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .product-detail-image:hover {
   background-color: rgb(3 105 161);;
  }
  .small-images-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  .small-image {
    border-radius: 8px;
    background-color: #ebebeb;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .selected-image {
    background-color: rgb(3 105 161);;
  }
  .reviews {
    color: #f02d34;
    margin-top: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .stars {
    display: flex;
  }

  .product-detail-desc h1 {
    font-weight: 700;
  }
  .product-detail-desc h4 {
    margin-top: 10px;
    font-weight: 700;
  }
  .product-detail-desc p {
    margin-top: 10px;
    max-width: 60ch;
  }
  .reviews p {
    color: #324d67;
    margin-top: 0px;
  }
  .product-detail-desc .price {
    font-weight: 700;
    font-size: 26px;
    margin-top: 30px;
    color: #f02d34;
  }
  .price .old-price,
  .product-price .old-price,
  .price .old-price {
    color: gray;
    text-decoration: line-through;
  }

  .quantity {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .product-detail-desc .buttons {
    display: flex;
    gap: 30px;
  }

  .quantity-desc {
    border: 1px solid gray;
    display: flex;
    align-items: center;
    margin-top: 0 !important;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */cd
  }

  .quantity-desc span {
    font-size: 16px;
    padding: 6px 12px;
    cursor: pointer;
  }
  .quantity-desc .minus {
    color: #f02d34;
  }
  .quantity-desc .num {
    border-right: 1px solid gray;
    border-left: 1px solid gray;
    font-size: 20px;
  }
  .quantity-desc .plus {
    color: rgb(49, 168, 49);
  }

  .product-detail-desc .buttons {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  .buttons .add-to-cart {
    padding: 10px 20px;
    border: 1px solid #181818;
    font-size: 18px;
    font-weight: 500;
    background-color: white;
    color: #181818;
    cursor: pointer;
    width: 100%;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .buttons .add-to-cart:hover {
    transform: scale(1.1, 1.1);
  }
  .buttons .buy-now {
    width: 100%;

    padding: 10px 20px;
    background-color: #181818;;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .buttons .buy-now:hover {
    transform: scale(1.1, 1.1);
  }

  .maylike-products-wrapper {
    margin-top: 120px;
  }
  .maylike-products-wrapper h2 {
    text-align: center;
    margin: 50px;
    color: #324d67;

    font-size: 28px;
  }
  .maylike-products-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }

`;
