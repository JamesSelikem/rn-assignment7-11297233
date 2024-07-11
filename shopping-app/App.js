import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import CheckoutScreen from './CheckoutScreen';
import ProductDetailScreen from './ProductDetailScreen';
import { CartProvider } from './CartContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown: false}} name=" " component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackNavigator} />
          <Drawer.Screen options={{headerShown: false}}name="Locations" component={CheckoutScreen} />
          <Drawer.Screen options={{headerShown: false}}name="Blog" component={CheckoutScreen} />
          <Drawer.Screen options={{headerShown: false}}name="Jewelry" component={CheckoutScreen} />
          <Drawer.Screen options={{headerShown: false}}name="Electronic" component={CheckoutScreen} />
          <Drawer.Screen options={{headerShown: false}}name="Clothing" component={CheckoutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
