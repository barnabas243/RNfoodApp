import { ImageSourcePropType } from "react-native";

export interface Restaurant {
    name: string;
    tagline: string;
    eta: string;
    imgUri: any;
    menu: Menu;
}

export interface MenuItem {
    title: string;
    ingredients: string[];
}

export interface Menu {
    items: MenuItem[];
}

export type RootStackParamList = {
    Restaurants: undefined;
    Menu: { menu: Menu };
};

export interface HomeScreenCellProps {
    key: number;
    title: string;
    tagline: string;
    eta: string;
    imgUri: ImageSourcePropType;
    action: () => void; // Assuming action is a function
    height: number; // Assuming height is a number
  }