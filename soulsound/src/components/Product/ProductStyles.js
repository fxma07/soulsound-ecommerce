import styled from "styled-components";

export const ProductStyles = styled.div`
  .product-card {
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
    color: #324d67;
  }

  .product-card:hover {
    transform: scale(1.1, 1.1);
  }

  .product-image {
    border-radius: 15px;
    background-color: #ebebeb;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
    width: 250px;
    height: 250px;
  }

  .product-name {
    font-weight: 500;
    max-width: 24ch;
  }
  .product-price {
    font-weight: 800;
    margin-top: 6px;
    color: black;
  }
`;
