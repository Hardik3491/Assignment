import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import navigationStrings from './navigationStrings';
import SignUpScreen from '../screens/auth/SignUpScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import OnboardingScreen from '../screens/auth/OnBoardingScreen';
import BottomNavigator from './BottomNavigator';
import ProductDetailScreen from '../screens/pdp/ProductDetailScreen';
import CheckoutScreen from '../screens/checkout/CheckoutScreen';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={navigationStrings.ONBOARD}
        component={OnboardingScreen}
      />
      <Stack.Screen name={navigationStrings.LOGIN} component={LoginScreen} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={SignUpScreen} />
      <Stack.Screen
        name={navigationStrings.BOTTOMTAB}
        component={BottomNavigator}
      />
      <Stack.Screen
        name={navigationStrings.PDP}
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name={navigationStrings.CHECKOUT}
        component={CheckoutScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
