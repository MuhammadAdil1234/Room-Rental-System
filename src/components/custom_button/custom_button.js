import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Icon, IconButton} from 'react-native-paper';
import styles from './style';
const CustomButton = props => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {}}>
      <Text style={styles.labelStyle}>{props.text}</Text>
      {/* {props.text == AppStrings.next ? (
        <IconButton
          icon={'chevron-right'}
          style={styles.iconOne}
          iconColor={'#FFFFFF'}
        />
      ) : props.text == AppStrings.login ? (
        <IconButton
          icon={'login'}
          style={styles.iconTwo}
          iconColor={'#FFFFFF'}
        />
      ) : null} */}
    </TouchableOpacity>
  );
};
export default CustomButton;
