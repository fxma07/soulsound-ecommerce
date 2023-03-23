import styled from "styled-components";

export const ImageGridSection = styled.section`
  .image-card {
    color: #fafbfa !important;
    border-radius: 8px;
    width: 100%;
    min-width: 0;
    overflow: hidden;
  }

  .card-1 {
    min-height: 600px;
    background: rgb(3 105 161);
  }

  .card-2,
  .card-3 {
    min-height: 200px;
    background: black;
  }

  .a2-wrapper {
    position: relative;
  }
  .a2 {
    @media (min-width: 768px) {
      width: 400px;
      height: 250px;
    }

    @media (min-width: 1024px) {
      width: 100%;
      height: auto;
      positon: absolute;
      bottom: 0;
    }
  }
  .content-wrapper {
    width: 100%;
    height: 100%;
  }
`;
