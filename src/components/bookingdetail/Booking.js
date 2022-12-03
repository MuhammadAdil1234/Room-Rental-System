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
  const [detail, isDetail] = useState(false);
  return (
    <View>
      {!detail ? (
        <View style={[styles.cardOne, !detail?{alignItems: 'center'}:null]}>
          <IconButton
            icon={'home'}
            size={widthPercentageToDP(15)}
            style={styles.icon}
          />
          <Text style={styles.hotelName}>Rental Hotel</Text>
          <Text style={styles.button}>3 Seater Room #SF03</Text>
          <View style={styles.button}>
            <CustomButton text={'Details'} width={70} detail={isDetail}/>
          </View>
        </View>
      ) : (
        <View style={styles.cardOne}>
          <View style={styles.detailText}>
            <Text style={styles.detail}>RoomID: SF03</Text>
            <Text style={styles.detail}>Room: 3 Seater Room</Text>
            <Text style={styles.detail}>Contact: 03418684541</Text>
            <Text style={styles.detail}>
              Detail: Luxry Classic Room in our hotel in just 15000 rupees with
              30% discount. Serves is outstanding. You can contact as well.
            </Text>
          </View>
          <View style={styles.twoButton}>
            <CustomButton text={'Close'} width={40} detail={isDetail}/>
            <CustomButton text={'Confirm'} width={40} />
          </View>
        </View>
      )}
    </View>
  );
};
export default Booking;
