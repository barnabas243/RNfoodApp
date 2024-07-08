// MenuScreen is a React functional component that displays a list of menu items grouped by sections.

import React from 'react';
import {View, Text, SectionList, TouchableOpacity, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useCart} from '../contexts/CartProvider';
import {MenuItem, MenuScreenProps} from '../types';

const MenuScreen = ({route}: MenuScreenProps) => {
  const {menu, restaurantId} = route.params;
  const {addToCart, decrementItemQuantity, cartItems} = useCart();

  const addMenuItemToCart = (menuItem: MenuItem) => {
    addToCart({
      ...menuItem,
      restaurantId: restaurantId,
    });
  };

  const removeMenuItemFromCart = (menuItemId: number) => {
    decrementItemQuantity(menuItemId);
  };

  // Data structure for SectionList
  const sections = menu.sections.map(section => ({
    title: section.title,
    data: section.items,
  }));

  const renderSectionHeader = ({section}: {section: {title: string}}) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  const renderSectionFooter = () => <View style={styles.sectionFooter} />;

  const renderSectionItem = ({item}: {item: MenuItem}) => {
    const cartItem = cartItems.find(ci => ci.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;
    const stock = item.stock - quantity;
    const isOutOfStock = stock === 0;

    return (
      <View
        style={[
          styles.itemContainer,
          {
            backgroundColor: isOutOfStock ? '#00000040' : 'transparent',
            borderColor: isOutOfStock ? '#00000080' : '#00000040',
          },
        ]}>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          <Text style={styles.itemStock}>Stock: {stock}</Text>
        </View>

        {isOutOfStock && (
          <View>
            <Text style={styles.outOfStockText}>Out of stock</Text>
          </View>
        )}
        {!(isOutOfStock && quantity === 0) && (
          <View style={styles.addButtonContainer}>
            {quantity > 0 && (
              <>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => removeMenuItemFromCart(item.id)}
                  disabled={quantity <= 0}>
                  <Feather name="minus" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.itemQuantity}>{quantity}</Text>
              </>
            )}
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => addMenuItemToCart(item)}
              disabled={isOutOfStock}>
              <Feather name="plus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={item => item.id.toString()}
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
  },
  sectionHeader: {
    backgroundColor: 'transparent',
    marginBottom: 4,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionFooter: {
    paddingBottom: 24,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  itemContent: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  addButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 8,
  },
  itemQuantity: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  sectionListContent: {
    paddingBottom: 16,
  },
  itemStock: {
    fontSize: 12,
    color: '#555',
  },
  outOfStockText: {
    color: 'red',
    fontSize: 14,
  },
});

export default MenuScreen;
