import { useLinkProps } from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, Image, View, Text, TextInput} from 'react-native';
// import CustomButton from '../../../components/custom_button/custom_button';
// import CustomInputBox from '../../../components/custom_input/custom_input_box';
// import {AppStrings} from '../../../globals/Strings';
import styles from './Styles';
const Input = (props) => {
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  return (
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={(newText) => props.onChangeText(newText)}
      // onChangeText={onChangeNumber}
      // value={number}
      placeholder={props.text}
      
    //   keyboardType="numeric"
      
    />
  );
};
export default Input;
