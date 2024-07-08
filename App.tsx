// Author: Barnabas Tan
// Code was written by Author

import React, {useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import {CartProvider} from './contexts/CartProvider';
import CartIcon from './components/CartIcon';
import MenuScreen from './screens/MenuScreen';
// import CartScreen from "./CartScreen_unused";
import HomeScreen from './screens/HomeScreen';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CartBottomSheetView from './components/CartBottomSheetView';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const sheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['50%', '75%'], []);

  return (
    <CartProvider>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Restaurants">
              <Stack.Screen
                name="Restaurants"
                component={HomeScreen}
                options={{
                  headerTitleAlign: 'center',
                  headerRight: () => <CartIcon sheetRef={sheetRef} />,
                }}
              />
              <Stack.Screen
                name="Menu"
                component={MenuScreen}
                options={({route}) => ({
                  headerBackAccessibilityLabel: 'Restaurant',
                  headerBackTitleVisible: true,
                  headerBackTitle: 'Restaurant',
                  headerTitle: route.params.restaurantTitle,
                  headerTitleAlign: 'center',
                  headerRight: () => <CartIcon sheetRef={sheetRef} />,
                })}
              />
            </Stack.Navigator>
            <BottomSheetModal
              backdropComponent={(
                props, // found from https://github.com/gorhom/react-native-bottom-sheet/issues/187
              ) => (
                <BottomSheetBackdrop
                  {...props}
                  opacity={0.5}
                  enableTouchThrough={false}
                  appearsOnIndex={0}
                  disappearsOnIndex={-1}
                  style={[{backgroundColor: 'rgba(0, 0, 0, 1)'}, StyleSheet.absoluteFillObject]}
                />
              )}
              enableContentPanningGesture={false}
              ref={sheetRef}
              index={1}
              snapPoints={snapPoints}
              onChange={() => {}}
              stackBehavior={'replace'}>
              <CartBottomSheetView />
            </BottomSheetModal>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </CartProvider>
  );
};

export default App;
