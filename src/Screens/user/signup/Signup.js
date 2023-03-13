import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../../components/custom_button/custom_button';
import CustomInputBox from '../../../components/custom_input/custom_input_box';
import {AppStrings} from '../../../globals/Strings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles';
const Signup = ({navigation}) => {
  var [email, setEmail] = useState('');
  var [lastName, setLastName] = useState('');
  var [password, setPassword] = useState('');
  var [firstName, setFirstName] = useState('');
  var [user, setUser]=useState([]);
  var data = { firstName, lastName, email, password};
  var mainData = [];
  const get = async () => {
    try {
      var data1 = await AsyncStorage.getItem('User_Info_Data');
      var get = JSON.parse(data1)
      setUser(get);
      // await AsyncStorage.removeItem('User_Info_Data');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get();   
  }, []);
  const StoreData = async () => {
    try {
      if (user == null) {
        mainData.push(data);
        await AsyncStorage.setItem('User_Info_Data', JSON.stringify(mainData));
      } else {      
        user.push(data);
        await AsyncStorage.setItem('User_Info_Data', JSON.stringify(user));
      }
    } catch (error) {
      console.log(error);
    }
  };
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
            <CustomButton
              text="Sign Up"
              width="60"
              navigation={navigation}
              firstName={firstName}
              email={email}
              password={password}
              store={StoreData}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          {AppStrings.haveAnAccount}{' '}
          <Text
            style={styles.loginText}
            onPress={() => {
              navigation.navigate('Signin');
            }}>
            {AppStrings.login}
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default Signup;
