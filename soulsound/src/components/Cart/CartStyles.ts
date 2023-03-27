import styled from "styled-components";
import { motion } from "framer-motion";

export const CartWrapper = styled(motion.div)`
  width: 100vw;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  z-index: 10000 !important;

  
 
  .cart-container {
    min-height: 100vh;
    width: 100vw;
    background-color: #fafbfa;
    float: right;
    padding: 2rem .75rem;
    position: relative;
  }
  
  .cart-heading {
    cursor: pointer;
    border: none;
    background-color: #181818;
    border-radius: 8px;
    padding: 3px 3px;
    color: white;
  }

  .cart-heading .heading {
    margin-left: 10px;
  }
  .cart-num-items {
    margin-left: 10px;
    color: #f02d34;
  }
  .empty-cart {
    margin: 40px;
    text-align: center;
    align-items: center;
  }
  .empty-cart h3 {
    font-weight: 600;
    font-size: 20px;
  }

  .product-container {
    margin-top: 15px;
    overflow: auto;
    max-height: 70vh;
  }
  .product {
    display: flex;
    padding: 1.25rem 0.3125rem;
    width: 100%;
    gap:15px
  }
  .product .cart-product-image {
    max-width: 25%;
    height: 25%;
    border-radius: 8px;
    background-color: #ebebeb;
  }

  .item-desc .flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #324d67;
    align-items: center;
  }

  .flex.top {
    flex-direction: column;
    align-items: start;
  }

 .item-desc{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction:column
 }

  .top {
    flex-wrap: wrap;
    gap: 10px;
  }
  .item-desc .bottom {

  }
  .flex h5 {
    font-size: 1rem;
  }
  .flex h4 {
    font-size: 0.87rem;
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
    font-size: 1rem;
    padding: 0.125rem 0.75rem;
    cursor: pointer;
  }
  .quantity-desc .minus {
    color: #f02d34;
  }
  .quantity-desc .num {
    border-right: 1px solid gray;
    border-left: 1px solid gray;
    font-size: 1rem;
  }
  .quantity-desc .plus {
    color: rgb(49, 168, 49);
  }

  .remove-item{
  font-size: 24px;
  color: #f02d34;
  cursor: pointer;
  background: transparent;
  border: none;
}

.cart-bottom{
  position: absolute;
  margin: 0 auto;
  bottom: 12px;
  right: 0px;
  width: 100%;
  padding: 1rem;
}

.btn-container{
  margin: auto;
  width: 100%;
}
.btn{
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  margin-top: 10px;
  margin-top: 40px;
  text-transform: uppercase;
  background-color: #181818;
  color: #fff;
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
}
.total{
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}
.total h3{
  font-size: 1rem;
}

@media (min-width: 768px){

   .cart-container {
    min-height: 100vh;
    width: 70vw;
    background-color: #fafbfa;
    float: right;
    padding: 2rem .5rem;
    position: relative;
  }
}

@media (min-width: 1024px){
  .cart-container {
    width: 30rem;
  }
}


`;
