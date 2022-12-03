import React from 'react';
import {ScrollView} from 'react-native';
import Booking from '../../../components/bookingdetail/Booking';
import styles from './Styles';
const BookingPage = () => {
  return (
    <ScrollView keyboardDismissMode="on-drag" style={styles.mainContainer}>
      <Booking/>
      <Booking/>
      <Booking/>
    </ScrollView>
  );
};
export default BookingPage;