// CartProvider.tsx is a custom React context provider that manages the state of the cart items in the app.
// It provides a CartContext that can be used to access and modify the cart items from any component in the app.

import React, { createContext, useContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import { CartContextType, CartItem, CartProviderProps } from "../types";

// Create context with initial value
const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  clearCartAndAddItem: () => {},
  incrementItemQuantity: () => {},
  decrementItemQuantity: () => {},
  cartItemCount: 0,
});

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Calculate cartItemCount dynamically whenever cartItems change
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      incrementItemQuantity(item.id);
    } else {
      if (
        cartItems.length === 0 ||
        cartItems[0].restaurantId === item.restaurantId
      ) {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      } else {
        Alert.alert(
          "Error",
          "Cannot add items from different restaurants to cart. Would you like to clear the cart and add this item?",
          [
            {
              text: "Clear Cart",
              onPress: () => clearCartAndAddItem(item),
              style: "destructive",
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
          ],
          { cancelable: false }
        );
      }
    }
  };

  const clearCartAndAddItem = (item: CartItem) => {
    clearCart();
    setCartItems([{ ...item, quantity: 1 }]);
  };

  const removeFromCart = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const incrementItemQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity < item.stock // Ensure quantity doesn't exceed stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementItemQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.quantity > 0 // Ensure quantity doesn't go below 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        clearCartAndAddItem,
        incrementItemQuantity,
        decrementItemQuantity,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
