import styled from "styled-components";

export const FooterBannerStyles = styled.div`
  padding: 100px 40px;
  background-color: #f02d34;
  border-radius: 15px;
  position: relative;
  height: 400px;
  line-height: 1;
  color: white;
  width: 100%;
  margin-top: 120px;

  .banner-desc {
    display: flex;
    justify-content: space-between;
  }
  .banner-desc button {
    border-radius: 8px;
    padding: 10px 16px;
    background-color: white;
    color: red;
    border: none;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
  .banner-desc .left h3 {
    font-weight: 900;
    font-size: 80px;
  }
  .banner-desc .left p {
    margin-top: 18px;
    margin-bottom: 18px;
  }
  .footer-banner-image {
    position: absolute;
    /* top: -35%;
  left: 8%; */
    top: -25%;
    left: 25%;
  }

  .banner-desc .right {
    line-height: 1.4;
  }
  .banner-desc .right h3 {
    font-weight: 800;
    font-size: 60px;
  }
  .banner-desc .right p {
    font-size: 18px;
  }
  .banner-desc .right .company-desc {
    font-size: 14px;
    font-weight: 300;
  }
`;
