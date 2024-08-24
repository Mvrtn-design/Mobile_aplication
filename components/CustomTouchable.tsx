import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';

const CustomTouchable = ({style, children, ...props}) => {
  return (
    <TouchableOpacity style={styles.colorTouchable} {...props}>
      <CustomText style={styles.colorText}>{children}</CustomText>
    </TouchableOpacity>
  );
};

export default CustomTouchable;

const styles = StyleSheet.create({
  colorTouchable: {
    backgroundColor: 'darkblue',
    paddingVertical: 10,
    marginTop: 25,
    marginHorizontal: 60,
    borderRadius: 15,
  },
  colorText: {
    color: 'white',
    fontSize: 20,
  },
});
