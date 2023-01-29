import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

import { useTranslation } from 'react-i18next'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_LANGUAGE } from '../Config/constants'

const ChangeLanguage = () => {
  const { i18n } = useTranslation()
  //// i18next.on('languageChanged', (lng: string) => { });
  let lang = i18n.language === 'ar' ? 'en' : 'ar'
  return (
    <View style={styles.container}>
      <Button
        title={lang}
        onPress={() => {
          AsyncStorage.setItem(USER_LANGUAGE, lang)
          i18n.changeLanguage(lang)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: 50,
    marginTop: 10,
  },
})
export default ChangeLanguage
