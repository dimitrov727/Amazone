import React from 'react';
import ShoppingCartScreen from '../screens/ShoppingCartScreen/index';
import AddressScreen from '../screens/AddressScreen/index';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomNavTab';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ShoppingCartScreen} name="Cart" />
      <Stack.Screen component={AddressScreen} name="AddressScreen" />
    </Stack.Navigator>
  );
};

export default HomeStack;
