import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../Screens/index';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
