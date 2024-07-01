import React from "react";
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons"; // Assuming Feather icons are imported
import { useCart } from "./contexts/CartProvider"; // Import your CartContext
import { MenuItem, MenuScreenProps } from "./types";

const MenuScreen: React.FC<MenuScreenProps> = ({ route }) => {
  const { menu, restaurantId } = route.params; // Get menu information from route params
  const { addToCart, decrementItemQuantity, cartItems } = useCart(); // Access addToCart function and cartItems from CartContext

  const addMenuItemToCart = (menuItem: MenuItem) => {
    addToCart({
      ...menuItem,
      restaurantId: restaurantId, // Assuming each menu item has a restaurantId
    });
  };
  const removeMenuItemFromCart = (menuItemId: number) => {
    decrementItemQuantity(menuItemId);
  };
  // Data structure for SectionList
  const sections = menu.sections.map((section) => ({
    title: section.title,
    data: section.items,
  }));

  const renderSectionHeader = ({ section }: { section: { title: string } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  const renderSectionFooter = () => <View style={styles.sectionFooter} />;

  const renderSectionItem = ({ item }: { item: MenuItem }) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemPrice}>£{item.price.toFixed(2)}</Text>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => removeMenuItemFromCart(item.id)}
          >
            <Feather name="minus" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.itemQuantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => addMenuItemToCart(item)}
          >
            <Feather name="plus" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderSectionFooter}
        renderItem={renderSectionItem}
        contentContainerStyle={styles.sectionListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionHeader: {
    backgroundColor: "#f0f0f0",
    marginBottom: 4, // Bottom margin for section headers
  },
  sectionHeaderText: {
    fontSize: 18, // Bigger font size for section headers
    fontWeight: "bold",
  },
  sectionFooter: {
    paddingBottom: 24, // Space between sections
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemContent: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
  },
  addButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    padding: 8,
  },
  itemQuantity: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  sectionListContent: {
    paddingBottom: 16, // Bottom padding for the entire SectionList
  },
});

export default MenuScreen;
