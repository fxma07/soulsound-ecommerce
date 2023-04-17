import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";
import styled from "styled-components";

const SuccessWrapper = styled.section`
  padding: 8.25rem 1.5rem 6.25rem;
  @media (min-width: 768px) {
    padding: 13.25rem 3rem;
  }

  .success-card {
    background-color: #c2c2c2;
    border-radius: 4px;
    padding: 30px 40px;
    flex-direction: column;
    align-items: center;
  }
`;

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalQuantities(0);
    setTotalPrice(0);
  }, [setCartItems, setTotalPrice, setTotalQuantities]);

  return (
    <SuccessWrapper className="success-wrapper">
      <div className="success container mx-auto text-center">
        <div className="success-card flex justify-center">
          <p className="icon">
            <BsBagCheckFill className="mb-5" size="24px" />
          </p>
          <h2>Thank you for your order!</h2>
          <p className="email-msg mb-10">
            Check your email inbox for the receipt.
          </p>
          <p className="description mb-5">
            If you have any questions, please email:
            <a className="email ml-2" href="mailto:order@example.com">
              order@example.com
            </a>
          </p>
          <Link href="/">
            <button className="btn">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </SuccessWrapper>
  );
};

export default Success;
