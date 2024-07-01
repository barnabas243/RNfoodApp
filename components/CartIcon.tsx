import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { useCart } from "../contexts/CartProvider";

const CartIcon: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { cartItemCount } = useCart(); // Access cartItemsCount number from CartContext

  const handleCartPress = () => {
    navigation.navigate("Cart");
  };

  return (
    <TouchableOpacity onPress={handleCartPress} style={styles.container}>
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
