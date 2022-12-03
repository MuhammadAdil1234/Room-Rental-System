import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../../components/custom_button/custom_button';
import CustomInputBox from '../../../components/custom_input/custom_input_box';
import {AppStrings} from '../../../globals/Strings';
import styles from './Styles';
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.heyThere}>{AppStrings.heyThere}</Text>
        <Text style={styles.welcomeBack}>{AppStrings.admin}</Text>
      </View>
      <View>
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
          <CustomButton text="Sign In" width="60" />
        </View>
      </View>
    </View>
  );
};
export default AdminLogin;
