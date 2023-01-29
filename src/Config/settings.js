import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

import {USER_LANGUAGE, EN_LANGUAGE} from '../Config/constants';

const Bootstrap = props => {
  const {i18n} = useTranslation();
  const [userLang, setUserLang] = useState(false);

  // User Language
  useEffect(() => {
    async function fetchLang() {
      const lang = await AsyncStorage.getItem(USER_LANGUAGE).then(
        value => value || EN_LANGUAGE,
      );
      i18n.changeLanguage(lang);
      setUserLang(true);
    }

    fetchLang();
  }, [i18n, props]);

  // setup setting is done
  useEffect(() => {
    if (userLang) {
      props.setLoaded(true);
    }
  }, [userLang]);
  return <></>;
};

export default Bootstrap;
