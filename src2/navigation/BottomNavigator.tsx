import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import CartScreen from '../screens/cart/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import navigationStrings from './navigationStrings';
import CustomTabBar from './CustomTabBar';
// Import your screens here...

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={navigationStrings.HOME} component={HomeScreen} />
      <Tab.Screen name={navigationStrings.SEARCH} component={SearchScreen} />
      <Tab.Screen name={navigationStrings.CART} component={CartScreen} />
      <Tab.Screen name={navigationStrings.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
