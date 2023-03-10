import styled from "styled-components";

export const ProductStyles = styled.div`
  .product-card {
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }

  .product-card:hover {
    transform: scale(1.1, 1.1);
  }

  .product-image {
    border-radius: 15px;
    background-color: #fee140;
    background-image: linear-gradient(45deg, #fee140 0%, #fa709a 100%);
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
  }
`;
