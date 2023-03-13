import React, {useState} from 'react';
import {
    ScrollView,
} from 'react-native';
import AdminCard from '../../../components/admincard/AdminCard';
import { AppStrings } from '../../../globals/Strings';
import styles from './Styles';
const MainPageAdmin = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
        <AdminCard text={AppStrings.roomDetail} navigation={navigation}/>
        <AdminCard text={AppStrings.confirmDetele} navigation={navigation}/>
    </ScrollView>
  );
};
export default MainPageAdmin;