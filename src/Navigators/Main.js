import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackHome from './StackHome';

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarStyle: {position: 'absolute', height: 50}}}>
      <Tab.Screen
        name="Home"
        component={StackHome}
        options={{
          headerShown: false,
          tabBarIconStyle: {display: 'none'},
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveTintColor: '#e91e63',
          title: 'First Tap',
        }}
      />
      <Tab.Screen
        name="Second Tab"
        component={StackHome}
        options={{
          tabBarIconStyle: {display: 'none'},
          tabBarLabelPosition: 'beside-icon',
          headerShown: false,
          title: 'Second Tap',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
