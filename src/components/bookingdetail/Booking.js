import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import styles from './Styles';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Popup from '../popup/Popup';
import {AppStrings} from '../../globals/Strings';
import CustomButton from '../custom_button/custom_button';
const Booking = props => {
  const [detail1, isDetail] = useState(false);
  return (
    <View>
      {!detail1 ? (
        <View style={[styles.cardOne, !detail1?{alignItems: 'center'}:null]}>
          <IconButton
            icon={'home'}
            size={widthPercentageToDP(15)}
            style={styles.icon}
          />
          <Text style={styles.hotelName}>Rental Hotel</Text>
          <Text style={styles.button}>3 Seater Room #SF03</Text>
          <View style={styles.button}>
            <CustomButton text={'Details'} width={70} detail1={isDetail}/>
          </View>
        </View>
      ) : (
        <View style={styles.cardOne}>
          <View style={styles.detailText}>
            <Text style={styles.detail}>RoomID: {props.roomId}</Text>
            <Text style={styles.detail}>Room: {props.room}</Text>
            <Text style={styles.detail}>ontact: {props.contact}</Text>
            <Text style={styles.detail}>
              Detail: {props.detail}
            </Text>
          </View>
          <View style={styles.twoButton}>
            <CustomButton text={'Close'} width={40} detail1={isDetail}/>
            <CustomButton text={'Confirm'} width={40} navigation={props.navigation}/>
          </View>
        </View>
      )}
    </View>
  );
};
export default Booking;
