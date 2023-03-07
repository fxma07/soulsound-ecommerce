import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { ProductType } from "../src/pages/index";

type ChildrenProps = {
  children: React.ReactNode;
};

type CartItem = {
  product: ProductType;
  products: ProductType[];
  quantity: number;
};

export type ContextValue = {
  showCart: boolean;
  setShowCart: (value: boolean) => void;
  cartItems: CartItem[];
  totalPrice?: number;
  totalQuantities?: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: ProductType, quantity: number) => void;
};

// Create a new context object with a default value
export const Context = createContext<ContextValue>({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 1,
  incQty: () => {},
  decQty: () => {},
  onAdd: () => {},
});

export const StateContext = ({ children }: ChildrenProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product: ProductType, quantity: number) => {
    const checkProductInCart = cartItems.find((item) =>
      item.products.some((p) => p._id === product._id)
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.product._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
        return cartProduct;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          product,
          quantity,
          products: [product],
        },
      ]);
    }
    toast.success(`${qty} ${product.name} added to the cart`);
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const contextValue: ContextValue = {
    showCart,
    setShowCart,
    cartItems,
    totalPrice,
    totalQuantities,
    qty,
    incQty,
    decQty,
    onAdd,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext<ContextValue>(Context);
