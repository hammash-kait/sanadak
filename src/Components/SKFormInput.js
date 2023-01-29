import React from 'react';
import {Input} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

const SKFormInput = ({
  iconType,
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  style,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <Input
      {...rest}
      name={name}
      placeholder={placeholder}
      style={[style]}
      leftIconContainerStyle={styles.iconStyle}
      leftIcon={{type: iconType, name: iconName}}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 15,
  },
  iconStyle: {
    marginRight: 10,
  },
});

export default SKFormInput;
