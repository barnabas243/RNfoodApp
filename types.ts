// types.ts is a file that contains all the types used in the app.

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

// NAVIGATION ///////////////////////////////////////////////////////////////////////////
export type RootStackParamList = {
  Restaurants: undefined;
  Menu: { menu: Menu; restaurantId: number; restaurantTitle: string };
  Cart: undefined;
};
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Restaurants"
>;
export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};
export type MenuScreenRouteProp = RouteProp<RootStackParamList, "Menu">;
export type MenuScreenProps = {
  route: MenuScreenRouteProp;
};
export type CartScreenRouteProp = RouteProp<RootStackParamList, "Cart">;

// RESTAURANT and MENU //////////////////////////////////////////////////////////////////
export type HomeScreenCellProps = {
  key: number;
  title: string;
  tagline: string;
  eta: string;
  imgUri: ImageSourcePropType;
  onPress: () => void;
  height: number;
};
export type Restaurant = {
  name: string;
  tagline: string;
  eta: string;
  imgUri: any;
  menu: Menu;
};
export type MenuItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};
export type MenuSection = {
  title: string;
  items: MenuItem[];
};
export type Menu = {
  sections: MenuSection[];
};

// CART /////////////////////////////////////////////////////////////////////////////////
export type CartItem = MenuItem & {
  restaurantId: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  clearCartAndAddItem: (item: CartItem) => void;
  incrementItemQuantity: (id: number) => void;
  decrementItemQuantity: (id: number) => void;
  cartItemCount: number;
};
export type CartProviderProps = {
  children: ReactNode;
};
export type CartIconProps = {
  sheetRef: React.RefObject<BottomSheetModal>;
};
