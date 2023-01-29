import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SKErrorMessage = ({errorValue}) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{errorValue}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginLeft: 25,
  },
  errorText: {
    color: 'red',
  },
});

export default SKErrorMessage;
