import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export interface Restaurant {
  name: string;
  tagline: string;
  eta: string;
  imgUri: any;
  menu: Menu;
}
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface Menu {
  sections: MenuSection[];
}
export interface CartItem extends MenuItem {
  restaurantId: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  clearCartAndAddItem: (item: CartItem) => void;
  incrementItemQuantity: (id: number) => void;
  decrementItemQuantity: (id: number) => void;
  cartItemCount: number;
}
export interface CartProviderProps {
  children: ReactNode;
}
export interface HomeScreenCellProps {
  key: number;
  title: string;
  tagline: string;
  eta: string;
  imgUri: ImageSourcePropType;
  onPress: () => void;
  height: number;
}

export type RootStackParamList = {
  Restaurants: undefined;
  Menu: { menu: Menu; restaurantId: number; restaurantTitle: string };
  Cart: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Restaurants"
>;
export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export type MenuScreenRouteProp = RouteProp<RootStackParamList, "Menu">;
export interface MenuScreenProps {
  route: MenuScreenRouteProp;
}
export type CartScreenRouteProp = RouteProp<RootStackParamList, "Cart">;
