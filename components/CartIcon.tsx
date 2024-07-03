// CartIcon component is used in the headerRight option of the Stack.Screen components in App.tsx. 
// This component is responsible for displaying the shopping cart icon in the header of the HomeScreen and MenuScreen components.
// When the user taps on the cart icon, the openCartModal function is called
// which opens the cart modal by calling the present method on the BottomSheetModal instance.

import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useCart } from "../contexts/CartProvider";
import { CartIconProps } from "../types";

const CartIcon: React.FC<CartIconProps> = ({ sheetRef }) => {
  const { cartItemCount } = useCart(); // Access cartItemsCount number from CartContext

  const openCartModal = () => {
    sheetRef.current?.present();
  };

  return (
    <TouchableOpacity onPress={openCartModal} style={styles.container}>
      <Feather name="shopping-cart" size={24} color="black" />
      {cartItemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartItemCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 30,
  },
  badge: {
    position: "absolute",
    right: -12,
    top: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default CartIcon;
