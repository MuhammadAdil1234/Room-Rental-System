import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import CustomButton from '../../../components/custom_button/custom_button';
import Input from '../../../components/user_input/Input';
import {AppStrings} from '../../../globals/Strings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles';
const UploadDetail = ({navigation}) => {
  var [roomId, setRoomID] = useState('');
  var [room, setRoom] = useState('');
  var [contact, setContact] = useState('');
  var [detail, setDetail] = useState('');
  var [user, setUser] = useState([]);
  var data = {roomId, room, contact, detail};
  var mainData = [];
  const get = async () => {
    try {
      var data1 = await AsyncStorage.getItem('room_detail');
      var get = JSON.parse(data1);
      setUser(get);
      // await AsyncStorage.removeItem('room_detail');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(user)
    get();
  }, []);
  const StoreData = async () => {
    try {
      if (user == null) {
        console.log('1');

        mainData.push(data);
        await AsyncStorage.setItem('room_detail', JSON.stringify(mainData));
      } else {
        console.log('2');
        console.log(user);
        user.push(data);
        await AsyncStorage.setItem('room_detail', JSON.stringify(user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View>
        <Text style={styles.text}>{AppStrings.roomDetail}</Text>
        <Input
          text={AppStrings.roomId}
          value={roomId}
          onChangeText={setRoomID}
        />
        <Input text={AppStrings.room} value={room} onChangeText={setRoom} />
        <Input
          text={AppStrings.contact}
          value={contact}
          onChangeText={setContact}
        />
        <TextInput
          style={styles.inputMultiLine}
          // value={value}
          value={detail}
          onChangeText={(newText) => setDetail(newText)}
          placeholder={AppStrings.enterDetail}
          multiline={true}
        />
      </View>
      <View style={styles.submitButton}>
        <CustomButton text={AppStrings.submit} width="40" StoreData={StoreData}/>
      </View>
    </ScrollView>
  );
};
export default UploadDetail;
