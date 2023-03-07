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
  toggleCartItemQuantity: (id: string, value: string) => void;
  onRemove: (product: ProductType) => void;
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
  toggleCartItemQuantity: () => {},
  onRemove: () => {},
});

export const StateContext = ({ children }: ChildrenProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  //Add to Cart
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

  //Remove item
  const onRemove = (product: ProductType) => {
    let foundProduct: CartItem | undefined = cartItems.find(
      (item) => item.product._id === product._id
    );
    const newCartItems = cartItems.filter(
      (item) => item.product._id !== product._id
    );

    if (foundProduct) {
      setTotalPrice(
        (prevTotalPrice) =>
          prevTotalPrice - foundProduct!.product.price * foundProduct!.quantity
      );

      setTotalQuantities(
        (prevTotalQuantities) => prevTotalQuantities - foundProduct!.quantity
      );
    }

    setCartItems(newCartItems);
  };

  //Cart increment/decrement
  const toggleCartItemQuantity = (id: string, value: string) => {
    const foundProductIndex = cartItems.findIndex(
      (item) => item.product._id === id
    );

    if (foundProductIndex === -1) {
      return;
    }

    const foundProduct = cartItems[foundProductIndex];

    if (value === "inc") {
      const updatedProduct = {
        ...foundProduct,
        quantity: foundProduct.quantity + 1,
      };

      const newCartItems = [
        ...cartItems.slice(0, foundProductIndex),
        updatedProduct,
        ...cartItems.slice(foundProductIndex + 1),
      ];

      setCartItems(newCartItems);
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + foundProduct.product!.price
      );
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec" && foundProduct.quantity > 1) {
      const updatedProduct = {
        ...foundProduct,
        quantity: foundProduct.quantity - 1,
      };

      const newCartItems = [
        ...cartItems.slice(0, foundProductIndex),
        updatedProduct,
        ...cartItems.slice(foundProductIndex + 1),
      ];

      setCartItems(newCartItems);
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice - foundProduct.product!.price
      );
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    }
  };

  //increase qty
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //decrese qty
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
    toggleCartItemQuantity,
    onRemove,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext<ContextValue>(Context);
