// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {useTheme} from '../../Hooks';
import {emailValidator, passwordValidator} from '../../Helpers/general';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {login} from '../../Store/User';

import {
  Loader,
  ChangeLanguage,
  SKFormInput,
  SKButton,
  SKErrorMessage,
} from '../../Components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_TOKEN_KEY} from '../../Config/constants';

// I used here component style and stylesheet style
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, setErrortext] = useState('');
  const {Images, Fonts} = useTheme();
  const {t} = useTranslation();

  const dispatch = useDispatch();

  const onLogin = idTokenResult => {
    dispatch(login(idTokenResult));
  };
  const handleSubmitPress = () => {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);
    if (emailError) {
      setErrortext(emailError);
      return;
    }
    if (passwordError) {
      setErrortext(passwordError);
      return;
    }
    setLoading(true);

    if (email === 'm@sanadak.com' && password === '123456') {
      AsyncStorage.setItem(USER_TOKEN_KEY, 'abc123');
      onLogin('abc123');
      navigation.navigate('Main');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <ChangeLanguage />
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.contentView}>
        <View style={styles.SectionStyle}>
          <KeyboardAvoidingView>
            <View style={{alignItems: 'center'}}>
              <Image source={Images.logo} style={styles.logo} />
            </View>
            <SKFormInput
              name="email"
              value={email}
              onChangeText={email => setEmail(email)}
              placeholder={t('auth.signIn.fields.email')}
              autoCapitalize="none"
              iconColor="#2C384A"
              keyboardType="email-address"
            />
            {/*export declare type IconType = 'material' | 'material-community' | 'simple-line-icon' | 'zocial' | 'font-awesome' | 'octicon' | 'ionicon' | 'foundation' | 'evilicon' | 'entypo' | 'antdesign' | 'font-awesome-5' | string;*/}
            <SKFormInput
              name="password"
              value={password}
              onChangeText={password => setPassword(password)}
              placeholder={t('auth.signIn.fields.password')}
              autoCapitalize="none"
              iconColor="#2C384A"
              secureTextEntry
              keyboardType="default"
              onSubmitEditing={Keyboard.dismiss}
              style={[Fonts.textDefault]}
            />

            <SKErrorMessage errorValue={errorText} />
            <SKButton
              buttonType="outline"
              onPress={handleSubmitPress}
              title={t('auth.signIn.login')}
              buttonColor="#fff"
            />
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  SectionStyle: {
    marginHorizontal: 35,
    margin: 10,
  },
  logo: {
    width: '40%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
    borderRadius: 50,
  },
});

export default LoginScreen;
