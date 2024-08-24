import {StyleSheet, Text, View} from 'react-native';
import React, {Children} from 'react';
import {TextInput} from 'react-native-paper';

const CustomInputBox = ({style = {}, ...props}) => {
  return (
    <View>
      <TextInput style={styles.textInputColor} {...props} />
    </View>
  );
};

export default CustomInputBox;

const styles = StyleSheet.create({
  textInputColor: {
    marginVertical: 4,
    color: 'darkblue',
    borderWidth: 2,
    borderColor: 'darkblue',
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: 'lightgray',
    fontWeight: 'bold',
  },
});
