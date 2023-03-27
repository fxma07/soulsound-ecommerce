import styled from "styled-components";

export const ProductStyles = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .product-card {
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
    width: 100%;
  }

  .product-card:hover {
    transform: scale(1.1, 1.1);
  }

  .product-image {
    border-radius: 15px;
    background-color: #f1f0f0;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
    width: 100%;
    height: 250px;

    @media (min-width: 640px) {
      height: 300px;
    }

    @media (min-width: 768px) {
      width: 100%;
      height: 250px;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: 300px;
    }
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
