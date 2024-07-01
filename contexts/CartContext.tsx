// CartProvider.tsx

import React, { createContext, useContext, useState, useEffect } from "react";
import { Alert } from "react-native";

// Define types for cart item and context
interface CartItem {
  id: number;
  name: string;
  price: number;
  restaurantId: number; // Assuming each menu item has a restaurantId
  quantity: number;
}

// Define types for CartContext
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  clearCartAndAddItem: (item: CartItem) => void;
  incrementItemQuantity: (id: number) => void;
  decrementItemQuantity: (id: number) => void;
  cartItemCount: number; // Corrected type to number
}

// Create context with initial value
const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  clearCartAndAddItem: () => {},
  incrementItemQuantity: () => {},
  decrementItemQuantity: () => {},
  cartItemCount: 0, // Initial value for cartItemCount
});

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Calculate cartItemCount dynamically whenever cartItems change
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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
              style: "destructive", // Style for destructive action (e.g., red color)
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
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItemQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
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
