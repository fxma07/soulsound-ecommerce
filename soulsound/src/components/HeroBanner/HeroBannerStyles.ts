import styled from "styled-components";

export const HeroBannerSection = styled.section`
  min-height: 100vh;
  background-size: cover !important;
  background: linear-gradient(
      180deg,
      rgba(254, 225, 64, 0.5) 0%,
      rgba(250, 112, 154, 0.5) 100%
    ),
    url("https://cdn.sanity.io/images/oa1zsrrp/production/171ee844a44674f37779b05b71ca4405fb579230-1600x900.jpg");
  background-repeat: no-repeat;

  .heading-wrapper {
    text-align: center;
    max-width: 500px;
    text-shadow: 2px 2px 4px #000000;
  }

  .subtitle {
    color: white;
  }
`;
