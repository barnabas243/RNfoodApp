import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types"; // Import HomeScreenNavigationProp
import { CartProvider } from "./contexts/CartContext";
import CartIcon from "./components/CartIcon";
import MenuScreen from "./MenuScreen";
import CartScreen from "./CartScreen";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Restaurants">
          <Stack.Screen
            name="Restaurants"
            component={HomeScreen}
            options={{
              headerTitleAlign: "center",
              headerRight: () => <CartIcon />,
            }}
          />
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{
              headerBackAccessibilityLabel: "Restaurant",
              headerBackTitleVisible: true,
              headerBackTitle: "Restaurant",
              headerTitleAlign: "center",
              headerRight: () => <CartIcon />,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
              headerTitleAlign: "center",
              headerRight: () => <CartIcon />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
