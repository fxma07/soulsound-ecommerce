import styled from "styled-components";

export const HeroBannerSection = styled.section`
  min-height: 800px;
  background-size: contain !important;
  background: #181819;
  background-image: url("https://cdn.sanity.io/images/oa1zsrrp/production/74cfb115b5b7437b3a005db2170b91a0fbf276df-500x500.png");
  background-repeat: no-repeat;
  background-position: bottom center;

  .heading-wrapper {
    text-align: center;
    max-width: 500px;
    text-shadow: 2px 2px 4px #000000;
  }

  .subtitle {
    color: white;
  }
`;
