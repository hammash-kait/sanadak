import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import {navigateAndSimpleReset} from '../../Navigators/utils';
import Bootstrap from '../../Config/settings';
import {useTheme} from '../../Hooks';
import {USER_TOKEN_KEY} from '../../Config/constants';

const StartScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const {Gutters, Layout} = useTheme();

  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hide();
    }
  }, [isLoaded]);

  // navigation
  useEffect(() => {
    try {
      const fetchUser = async () => {
        await AsyncStorage.getItem(USER_TOKEN_KEY).then(value => {
          setUser(value);
        });
      };
      fetchUser();

      if (!user) {
        navigateAndSimpleReset('Auth');
        return;
      }

      navigateAndSimpleReset('Main');
    } catch (e) {
      console.log(e.message);
    }
  }, [isLoaded, user]);

  if (!isLoaded) {
    return <Bootstrap setLoaded={setIsLoaded} />;
  }

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <ActivityIndicator
        color={'green'}
        size={'large'}
        style={[Gutters.largeVMargin]}
      />
    </View>
  );
};

export default StartScreen;
