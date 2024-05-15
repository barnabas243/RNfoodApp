import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView, ImageSourcePropType } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

interface HomeScreenCellProps {
  title: string;
  address: string;
  eta: string;
  imgUri: ImageSourcePropType;
  highlightColor?: string; // Optional highlight color prop
}

function HomeScreenCell(props: HomeScreenCellProps) {
  const { title, address, eta, imgUri, highlightColor } = props;

  return (
    <Cell >
      <View style={[styles.cellContentView, { backgroundColor: highlightColor || '#ccc' }]}>
        <Image
          style={styles.image}
          source={imgUri}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.address}>{address}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.etaText}>{eta.replace('mins', '\nmins')}</Text>
          </View>
        </View>
      </View>
    </Cell>
  );
}

const restaurantsData = [
  {
    name: "Joe's Gelato",
    address: 'Desert, Ice cream, £££',
    eta: '10-30mins',
    imgUri: require('./assets/example.jpg')
  },
  {
    name: 'The Gourmet Kitchen',
    address: '123 Main St',
    cuisine: 'Italian',
    eta: '50+mins',
    imgUri: require('./assets/example.jpg')
  },
  {
    name: 'Sushi World',
    address: '456 Elm St',
    cuisine: 'Japanese',
    eta: '20-50mins',
    imgUri: require('./assets/example.jpg')
  },
  {
    name: 'Burger Haven',
    address: '789 Oak St',
    cuisine: 'American',
    eta: '25-60mins',
    imgUri: require('./assets/example.jpg')
  },
];

function Restaurants() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TableView>
          <Section
            header=""
            hideSeparator
            separatorTintColor="#ccc"
          >
            {restaurantsData.map((restaurant, index) => (
              <HomeScreenCell
                key={index}
                title={restaurant.name}
                address={restaurant.address}
                eta={restaurant.eta}
                imgUri={restaurant.imgUri}
              />
            ))}
          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
}

function Menu() {
  return (
    <View style={styles.centered}>
      <Text>Menu Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={Restaurants} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
  },
  cell: {
    height: 290,
    backgroundColor: 'transparent',
  },
  cellContentView: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 380,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16, // Add padding to space out from cell edges
  },
  leftContainer: {
    flex: 1,
    marginTop: 10
  },
  rightContainer: {
    marginLeft: 'auto', // Push the right container to the right
    alignItems: 'center',
    transform: [{ translateX: -25 }, { translateY: -35 }],
    backgroundColor: 'white',
    borderRadius: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  etaText: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#fff', // Set the highlight color
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 30,
    textAlign:'center',
    flexWrap: 'wrap', // Allow text wrapping
  },
});
