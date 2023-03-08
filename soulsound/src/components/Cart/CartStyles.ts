import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999 !important;
  /* will-change: transform; */
  transition: all 1s ease-in-out;

  .cart-container {
    height: 100vh;
    min-width: 600px;
    background-color: white;
    float: right;
    padding: 40px 10px;
    position: relative;
  }

  .cart-heading {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    gap: 2px;
    margin-left: 10px;
    border: none;
    background-color: transparent;
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
    padding: 20px 10px;
  }
  .product {
    display: flex;
    padding: 20px;
    width: 100%;
    gap:30px
  }
  .product .cart-product-image {
    max-width: 180px;
    min-height: 150px;
    border-radius: 15px;
    background-color: #ebebeb;
  }

  .item-desc .flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #324d67;
    align-items: center;
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
    margin-top: 60px;
  }
  .flex h5 {
    font-size: 24px;
  }
  .flex h4 {
    font-size: 20px;
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
    font-size: 16px;
    padding: 6px 12px;
    cursor: pointer;
  }
  .quantity-desc .minus {
    color: #f02d34;
  }
  .quantity-desc .num {
    border-right: 1px solid gray;
    border-left: 1px solid gray;
    font-size: 20px;
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
  bottom: 12px;
  right: 5px;
width: 100%;
padding: 30px 65px;

}

.btn-container{
  width: 400px;
  margin: auto;
}
.btn{
  width: 100%;
  max-width: 400px;
  padding: 10px 12px;
  border-radius: 15px;
  border: none;
  font-size: 20px;
  margin-top: 10px;
  margin-top: 40px;
  text-transform: uppercase;
  background-color: #f02d34;
  color: #fff;
  cursor: pointer;
    transform: scale(1, 1);
  transition: transform 0.5s ease;
}
.btn:hover{
  transform: scale(1.1,1.1);
}

.total{
  display: flex;
  justify-content: space-between;
}
.total h3{
  font-size: 22px;

}

`;
