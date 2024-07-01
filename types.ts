import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
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
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface Menu {
  sections: MenuSection[];
}

export interface HomeScreenCellProps {
  key: number;
  title: string;
  tagline: string;
  eta: string;
  imgUri: ImageSourcePropType;
  action: () => void; // Assuming action is a function
  height: number; // Assuming height is a number
}

export type RootStackParamList = {
  Restaurants: undefined;
  Menu: { menu: Menu; restaurantId: number };
  Cart: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Restaurants"
>;
export type MenuScreenRouteProp = RouteProp<RootStackParamList, "Menu">;
export type CartScreenRouteProp = RouteProp<RootStackParamList, "Cart">;
