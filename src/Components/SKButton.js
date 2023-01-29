import React from 'react';
import {Button} from '@rneui/themed';
import {StyleSheet} from 'react-native';

const SKButton = ({
  title,
  buttonType,
  buttonColor,
  containerStyle,
  ...rest
}) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={styles.button}
    titleStyle={{color: buttonColor}}
    containerStyle={containerStyle}
  />
);
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#53c9be',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 35,
    marginTop: 10,
  },
});

export default SKButton;
