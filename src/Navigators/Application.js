import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StartScreen} from '../Screens/index';
import MainNavigator from './Main';
import {navigationRef} from './utils';
import AuthNavigator from './Auth';

const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#53c9be'}}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            screenOptions={{headerShown: false}}
          />
          {/* Auth Navigator: Include Login and Signup */}
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{animationEnabled: false, headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
