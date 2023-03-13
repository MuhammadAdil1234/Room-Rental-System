import React, {useEffect, useState} from 'react';
import {ScrollView, Image, View, Text} from 'react-native';
import CustomButton from '../../../components/custom_button/custom_button';
import CustomInputBox from '../../../components/custom_input/custom_input_box';
import {AppStrings} from '../../../globals/Strings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles';
const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  var [person, setPerson] = useState({});
  const getData = async () => {
    try {
      var data = await AsyncStorage.getItem('User_Info_Data');
      var user = JSON.parse(data);
      setPerson(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const auth = () => {
    for (i in person) {
      if (email == person[i].email && password == person[i].password) {
        setCheck(true);
      }
    }
    if(check==true)
    {
      navigation.navigate('Mainpage')
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.heyThere}>{AppStrings.heyThere}</Text>
          <Text style={styles.welcomeBack}>{AppStrings.welcome}</Text>
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
            <CustomButton text="Sign In" width="60" navigation={navigation} check={check} auth={auth}/>
          </View>
        </View>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          {AppStrings.doHaveAccount}{' '}
          <Text
            style={styles.loginText}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            {AppStrings.signIn}
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default Signin;
