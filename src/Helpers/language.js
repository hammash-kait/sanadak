import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  USER_LANGUAGE,
  DEFAULT_LANGUAGE,
} from '../Config/constants';

/**
 * Set current language
 *
 * @param {string} language
 * @returns {void}
 */
export const setLang = language => {
  AsyncStorage.setItem(USER_LANGUAGE, language);
};

/**
 * Get Current Language and set default language if not exists
 *
 * @returns {string}
 */
export const getLang = async () => {
  const currentLang = await AsyncStorage.getItem(USER_LANGUAGE).then(
    value => value || DEFAULT_LANGUAGE,
  );
  setLang(currentLang);
  return currentLang;
};
