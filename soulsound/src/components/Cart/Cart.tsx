import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../../../context/StateContext";
import { urlFor } from "../../../lib/client";
import getStripe from "../../../lib/getStripe";
import Image from "next/image";
import { CartWrapper } from "./CartStyles";

export const cartVariants = {
  open: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      bounce: 0,
    },
  },
  closed: {
    opacity: 1,
    x: "100%",
    transition: {
      type: "spring",
      bounce: 0,
    },
  },
};

export const wrapper = {
  open: {
    display: "block",
    opacity: 1,
  },
  closed: {
    opacity: 0,
    transition: { delay: 0.3 },
    transitionEnd: { display: "none" },
  },
};

const Cart = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    showCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  console.log(cartItems);

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }),
    });
    if (response.status === 500) return;

    const data = await response.json();
    toast.loading("Redirecting...");

    stripe!.redirectToCheckout({ sessionId: data.id });
  };

  useEffect(() => {
    document.body.style.overflow = showCart ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCart]);

  return (
    <CartWrapper
      id="cart"
      className="cart-wrapper"
      ref={cartRef}
      initial="closed"
      animate={showCart ? "open" : "closed"}
      variants={wrapper}
    >
      <motion.div
        className="cart-container"
        initial="closed"
        animate={showCart ? "open" : "closed"}
        variants={cartVariants}
      >
        <div className="flex items-center mx-auto">
          <button
            type="button"
            className="cart-heading"
            onClick={() => setShowCart(false)}
          >
            <AiOutlineClose size="20px" />
          </button>
          <div className="mx-auto">
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">({totalQuantities} items)</span>
          </div>
        </div>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping className="mx-auto" size={150} />
            <h3>Your Shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue shopping
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div className="product" key={item.product._id}>
                <Image
                  alt={item.product.name}
                  src={urlFor(item?.product.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex col top">
                    <h5>{item.product.name}</h5>
                    <h4>${item.product.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item.product._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuantity(item.product._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item.product)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </CartWrapper>
  );
};

export default Cart;
