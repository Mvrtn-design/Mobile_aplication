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
    color: 'blue',
    fontFamily: 'Helvetica',
  },
});

export default CustomText;
