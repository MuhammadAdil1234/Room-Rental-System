import {useLinkProps} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AppStrings} from '../../globals/Strings';
// import CustomButton from '../../../components/custom_button/custom_button';
// import CustomInputBox from '../../../components/custom_input/custom_input_box';
// import {AppStrings} from '../../../globals/Strings';
import styles from './Styles';
const AdminCard = props => {
  return (
    <TouchableOpacity
      style={styles.mainCard}
      onPress={() => {
        props.text == AppStrings.roomDetail
          ? props.navigation.navigate('UploadDetail')
          : props.text == AppStrings.confirmDetele
          ? props.navigation.navigate('TableData')
          : null;
      }}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
export default AdminCard;
