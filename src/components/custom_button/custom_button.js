import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Icon, IconButton} from 'react-native-paper';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import styles from './style';
const CustomButton = props => {
  return (
    <TouchableOpacity
      style={[styles.button, {width: widthPercentageToDP(props.width)}]}
      onPress={() => {
        {
          props.text == 'Details'
            ? props.detail(true)
            : props.text == 'Close'
            ? props.detail(false)
            : null;
        }
      }}>
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
