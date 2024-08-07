// HomeScreen.tsx is a component that displays a list of restaurants on the home screen.

import {ScrollView} from 'react-native';
import {HomeScreenProps, Restaurant} from '../types';
import {Section, TableView} from 'react-native-tableview-simple';
import {restaurantsData} from '../data/RestaurantData';
import HomescreenCell from '../components/HomescreenCell';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <ScrollView>
      <TableView>
        <Section
          hideSeparator={true}
          separatorTintColor="#ccc"
          sectionPaddingTop={0}
          sectionPaddingBottom={0}>
          {restaurantsData.map((restaurant: Restaurant, index: number) => (
            <HomescreenCell
              key={index}
              title={restaurant.name}
              tagline={restaurant.tagline}
              eta={restaurant.eta}
              imgUri={restaurant.imgUri}
              height={290}
              onPress={() =>
                navigation.navigate('Menu', {
                  menu: restaurant.menu,
                  restaurantId: index,
                  restaurantTitle: restaurant.name,
                })
              }
            />
          ))}
        </Section>
      </TableView>
    </ScrollView>
  );
};

export default HomeScreen;
