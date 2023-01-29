import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SKEmptyData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>No data found</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});
export default SKEmptyData;
