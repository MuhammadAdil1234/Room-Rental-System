import React from 'react';
import {ScrollView, Text} from 'react-native';
import styles from './Styles';
import Confirmbox from '../../../components/confirmationbox/Confirmbox';
const Confirmbooking = props => {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer} >
        <Text style={styles.text}>Booking Confirmation</Text>
        <Confirmbox/>
        <Confirmbox/>
    </ScrollView>
  );
};
export default Confirmbooking;
