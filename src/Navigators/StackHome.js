import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ApartmentDetails, HomeScreen} from '../Screens';

// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{animationEnabled: false, headerShown: false}}
    />
    <Stack.Screen
      name="ApartmentDetails"
      component={ApartmentDetails}
      screenOptions={{headerShown: false}}
      options={{
        title: 'Register', //Set Header Title
        headerStyle: {
          backgroundColor: 'lightgray', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <Stack.Screen name="#" component={'#'} />
  </Stack.Navigator>
);
