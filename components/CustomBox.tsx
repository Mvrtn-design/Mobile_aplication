import {View, Text, StyleSheet} from 'react-native';
import React, {Children} from 'react';
import {Box} from '@gluestack-ui/themed';

const CustomBox = ({style = {}, children, ...props}) => {
  return (
    <View>
      <Box style={[styles.headingContainer, styles.mainBox, style.styles]}>
        <View style={styles.textColor}>{children}</View>
      </Box>
      <Box style={[styles.shadowContainer, styles.shadowBox, styles.styles]} />
    </View>
  );
};

export default CustomBox;

const styles = StyleSheet.create({
  headingContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    flexDirection: 'row',
    padding: 20,
    position: 'relative',
    backgroundColor: 'orange',
  },
  textColor: {
    color: 'pink',
  },
  shadowContainer: {
    shadowColor: 'blue',
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: 'gray',
    zIndex: 1,
  },
  mainBox: {
    borderWidth: 5,
    borderColor: 'green',
    borderRadius: 20,
    backgroundColor: 'lightblue',
  },
  shadowBox: {
    shadowRadius: 20,
    backgroundColor: style => style.shadowBox?.backgroundColor || 'gray',
  },
});
