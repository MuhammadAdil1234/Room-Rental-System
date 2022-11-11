import React, {useState} from 'react';
import {ScrollView, Image, View, Text} from 'react-native';
import CustomButton from '../../components/custom_button/custom_button';
import CustomInputBox from '../../components/custom_input/custom_input_box';
import {AppStrings} from '../../globals/Strings';
import styles from './Styles';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.heyThere}>{AppStrings.heyThere}</Text>
          <Text style={styles.createAnAccount}>
            {AppStrings.creatAnAccount}
          </Text>
        </View>
        <View>
          <CustomInputBox
            icon={'account'}
            value={firstName}
            label={AppStrings.fistName}
            onChangeText={setFirstName}
          />
          <CustomInputBox
            icon={'account'}
            value={lastName}
            label={AppStrings.lastName}
            onChangeText={setLastName}
          />
          <CustomInputBox
            icon={'email-outline'}
            value={email}
            label={AppStrings.email}
            onChangeText={setEmail}
          />
          <CustomInputBox
            icon={'key-chain-variant'}
            value={password}
            isHiddenField={true}
            label={AppStrings.password}
            onChangeText={setPassword}
          />
          <View style={styles.buttonContainer}>
            <CustomButton text="Sign Up" width="60" />
          </View>
        </View>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          {AppStrings.haveAnAccount} <Text style={styles.loginText}>{AppStrings.login}</Text>
        </Text>
      </View>
    </View>
  );
};
export default Signup;
