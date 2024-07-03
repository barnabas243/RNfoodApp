import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useCart } from "../contexts/CartProvider";
import { CartItem } from "../types";
import { restaurantsData } from "../data/RestaurantData";
import SwipeableFlatList from "react-native-swipeable-list";

const CartScreen: React.FC = () => {
  const {
    cartItems,
    removeFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
    clearCart,
  } = useCart();

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  const handleIncrementItem = (id: number) => {
    incrementItemQuantity(id);
  };

  const handleDecrementItem = (id: number) => {
    decrementItemQuantity(id);
  };

  const handleClearCart = () => {
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to clear the cart?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Clear",
          onPress: () => clearCart(),
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };
  let restaurantTitle = "Your Cart is Empty"; // Default title if cart is empty

  if (cartItems && cartItems.length > 0) {
    const restaurantId = cartItems[0].restaurantId;

    // Assuming restaurantsData is an array or object where you can access by index or key
    if (restaurantsData && restaurantsData[restaurantId]) {
      restaurantTitle = restaurantsData[restaurantId].name;
    }
  }

  const QuickActions = (index: number, qaItemId: number) => {
    return (
      <View style={styles.qaContainer}>
        <View
          style={{
            width: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => handleRemoveItem(qaItemId)}
          >
            <Feather name="trash" size={20} color="red" />
            <Text style={{ color: "red", marginLeft: 5 }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={[styles.itemContainer, { backgroundColor: "#fff" }]}>
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <Text style={styles.itemStock}>Stock: {item.stock - 1}</Text>
      </View>
      <Text style={styles.itemTotalPrice}>
        ${(item.price * item.quantity).toFixed(2)}
      </Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleDecrementItem(item.id)}>
          <Feather name="minus" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => handleIncrementItem(item.id)}>
          <Feather name="plus" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeableFlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        maxSwipeDistance={100}
        renderQuickActions={({ index, item }) => QuickActions(index, item.id)}
        contentContainerStyle={styles.contentContainerStyle}
        shouldBounceOnMount={true}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{restaurantTitle}</Text>
            <TouchableOpacity onPress={handleClearCart}>
              <Text style={styles.clearCartText}>Clear Cart</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            <Text style={styles.totalText}>
              Total: $
              {cartItems
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  clearCartText: {
    fontSize: 16,
    color: "red",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    color: "black",
  },
  itemDetailsContainer: {
    flex: 2,
  },
  itemName: {
    fontSize: 20,
  },
  itemStock: {
    fontSize: 14,
    color: "#888",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  itemPrice: {
    fontSize: 16,
  },
  itemTotalPrice: {
    fontSize: 16,
    flex: 1,
    textAlign: "center",
  },
  footerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  qaContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "#ffbcbc",
    backgroundColor: "#ffcccc",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});

export default CartScreen;
