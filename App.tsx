import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp  } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { TableView, Section, Cell } from 'react-native-tableview-simple';
import { Restaurant, RootStackParamList } from './types';
import HomescreenCell from './components/HomescreenCell';
import {restaurantsData} from './data/Restaurant';

const Stack = createStackNavigator<RootStackParamList>();
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Restaurants'>;
type MenuScreenRouteProp = RouteProp<RootStackParamList, 'Menu'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

interface MenuScreenProps {
  route: MenuScreenRouteProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView>
      <TableView>
        <Section header="" hideSeparator={true} separatorTintColor="#ccc" sectionPaddingTop={0} sectionPaddingBottom={0}>
          {restaurantsData.map((restaurant: Restaurant, index: number) => (
            <HomescreenCell
              key={index}
              title={restaurant.name}
              tagline={restaurant.tagline}
              eta={restaurant.eta}
              imgUri={restaurant.imgUri}
              height={290}
              action={() => navigation.navigate('Menu', { menu: restaurant.menu })}/>
          ))}
        </Section>
      </TableView>
    </ScrollView>
  );
};

const MenuScreen: React.FC<MenuScreenProps> = ({ route }) => {
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

const App: React.FC = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default App;
