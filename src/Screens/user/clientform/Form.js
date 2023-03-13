import React, {useState, useEffect} from 'react';
import {ScrollView, Image, View, Text, TextInput} from 'react-native';
import CustomButton from '../../../components/custom_button/custom_button';
import CustomInputBox from '../../../components/custom_input/custom_input_box';
import Input from '../../../components/user_input/Input';
import {AppStrings} from '../../../globals/Strings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles';
const Form = ({navigation}) => {
  const [name, setName] = useState('');
  const [CNIC, setCNIC] = useState('');
  const [contact, setContact] = useState('');
  const [roomId, setRoomId] = useState('');
  var [user, setUser] = useState([]);
  var data = [name, CNIC, contact, roomId];
  var mainData = [];
  const get = async () => {
    try {
      var data1 = await AsyncStorage.getItem('user_room_book');
      var get = JSON.parse(data1);
      setUser(get);
      // await AsyncStorage.removeItem('user_room_book');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get();
    console.log(user);
  }, []);
  const StoreData = async () => {
    try {
      if (user == null) {
        mainData.push(data);
        await AsyncStorage.setItem('user_room_book', JSON.stringify(mainData));
      } else {
        user.push(data);
        await AsyncStorage.setItem('user_room_book', JSON.stringify(user));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View>
        <Text style={styles.text}>Room Form</Text>
        <Input text="Name" value={name} onChangeText={setName} />
        <Input text="CNIC" value={CNIC} onChangeText={setCNIC} />
        <Input text="Contact" value={contact} onChangeText={setContact} />
        <Input text="Room ID" value={roomId} onChangeText={setRoomId} />
      </View>
      <View style={styles.submitButton}>
        <CustomButton text={AppStrings.done} width="40" StoreData={StoreData} contact={contact} navigation={navigation}/>
      </View>
    </ScrollView>
  );
};
export default Form;
