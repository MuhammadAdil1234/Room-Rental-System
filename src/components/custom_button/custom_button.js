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
            ? props.detail1(true)
            : props.text == 'Close'
            ? props.detail1(false)
            : null;
          props.text == 'Admin'
            ? props.navigation.navigate('AdminLogin')
            : props.text == 'Sign Up' &&
              props.firsName != '' &&
              props.email != '' &&
              props.password != ''
            ? [props.navigation.navigate('Signin'), props.store()]
            : props.text == 'User'
            ? props.navigation.navigate('Signup')
            : props.text == 'Sign In'
            ? props.auth()
            : props.text == 'Confirm'
            ? props.navigation.navigate('Form')
            : props.text == 'Sign-In' &&
              props.email == 'admin@gmail.com' &&
              props.password == '12345'
            ? props.navigation.navigate('MainPageAdmin')
            : props.text == 'Submit'
            ? [props.StoreData(), alert('Upload Detail')]
            : props.text == 'Done' && props.contact!=null
            ? [props.StoreData(), alert('Upload Detail')]
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
