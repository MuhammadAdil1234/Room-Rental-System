import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import Booking from '../../../components/bookingdetail/Booking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles';

const BookingPage = ({navigation}) => {
  var [person, setPerson] = useState({});
  var array = person;
  const getData = async () => {
    try {
      var data = await AsyncStorage.getItem('room_detail');
      var user = JSON.parse(data);
      setPerson(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <FlatList
      style={styles.mainContainer}
      data={array}
      renderItem={element => {
        return (
          <Booking
            roomId={element.item.roomId}
            room={element.item.room}
            contact={element.item.contact}
            detail={element.item.detail}
            navigation={navigation}
          />
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default BookingPage;
