import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CustomText = ({style, children, ...props}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'Helvetica',
    alignContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default CustomText;
