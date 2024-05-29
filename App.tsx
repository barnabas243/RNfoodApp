import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, Image, StyleSheet, ImageSourcePropType, SafeAreaView } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple';

import HomescreenCell from './components/HomescreenCell';

const Stack = createStackNavigator();

const restaurantsData = [
  {
    name: "Joe's Gelato",
    tagline: 'Desert, Ice cream, £££',
    eta: '10-30',
    imgUri: require('./assets/example.jpg')
  },
  {
    name: 'The Gourmet Kitchen',
    tagline: 'Desert, Ice cream, £££',
    eta: '50+',
    imgUri: require('./assets/example.jpg')
  },
  {
    name: 'Sushi World',
    tagline: 'Desert, Ice cream, £££',
    eta: '20-50',
    imgUri: require('./assets/example.jpg')
  },
  {
    name: 'Burger Haven',
    tagline: 'Desert, Ice cream, £££',
    eta: '25-60',
    imgUri: require('./assets/example.jpg')
  },
];

const HomeScreen = ({ navigation }) => {
  const menuData = [
    {
      title: "Joe's Gelato",
      items: [
        {
          title: "Gelato",
          ingredients: ["Vanilla", "Chocolate", "Strawberry"]
        },
        {
          title: "Sundaes",
          ingredients: ["Hot Fudge", "Banana Split", "Caramel"]
        },
        // Add more items as needed
      ]
    },
    {
      title: "The Gourmet Kitchen",
      items: [
        {
          title: "Pasta",
          ingredients: ["Spaghetti", "Penne Arrabiata", "Fettuccine Alfredo"]
        },
        {
          title: "Pizza",
          ingredients: ["Margherita ", "Pepperoni", "Vegetarian"]
        },
        // Add more items as needed
      ]
    },
    {
      title: "Sushi World",
      items: [
        {
          title: "Sushi Rolls",
          ingredients: ["California", "Spicy Tuna", "Salmon Avocado"]
        },
        {
          title: "Nigiri",
          ingredients: ["Salmon", "Tuna", "Shrimp"]
        },
        // Add more items as needed
      ]
    },
    {
      title: "Burger Haven",
      items: [
        {
          title: "Classic Burgers",
          ingredients: ["Cheeseburger", "Bacon Burger", "Veggie Burger"]
        },
        {
          title: "Specialty Burgers",
          ingredients: ["Mushroom Swiss Burger", "BBQ Burger", "Avocado Bacon Burger"]
        },
        // Add more items as needed
      ]
    }
  ];



  return (
    <ScrollView >
      <TableView>
        <Section
          header=""
          hideSeparator
          separatorTintColor="#ccc"
        >
          {restaurantsData.map((restaurant, index) => (
            <HomescreenCell
              key={index}
              title={restaurant.name}
              tagline={restaurant.tagline}
              eta={restaurant.eta}
              imgUri={restaurant.imgUri}
              height={290}
              action={() => navigation.navigate('Menu', { menu: menuData[index] })}
            />
          ))}
        </Section>
      </TableView>
    </ScrollView>
  );
};

const MenuScreen = ({ route }) => {
  const { menu } = route.params; // Get menu information from route params

  return (
    <View style={styles.container}>
      <TableView>
        {menu.items.map((item, index) => (
          <Section key={index} header={item.title}>
            {item.ingredients.map((ingredient, i) => (
              <Cell key={i} title={ingredient} />
            ))}
          </Section>
        ))}
      </TableView>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Restaurants">
          <Stack.Screen
            name="Restaurants"
            component={HomeScreen}
            options={{
              headerTitleAlign: 'center'
            }} />
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{
              headerBackAccessibilityLabel: "Restaurant",
              headerBackTitleVisible: true,
              headerBackTitle: 'Restaurant',
              headerTitleAlign: 'center'
            }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
