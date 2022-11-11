import React from 'react';
import {ScrollView, Image, View, Text} from 'react-native';
import CustomButton from '../../components/custom_button/custom_button';
import {AppImages} from '../../globals/Imagelinks';
import {AppStrings} from '../../globals/Strings';
import styles from './Styles';
const HomePage = () => {
  return (
    <ScrollView keyboardDismissMode="on-drag">
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={AppImages.logoImage} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{AppStrings.roomRental}</Text>
          <Text style={styles.text2}>{AppStrings.explaination}</Text>
          <Text style={styles.text2}>{AppStrings.explaination}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton text="On Rent" width='40'/>
          <CustomButton text="Booking" width='40'/>
        </View>
      </View>
    </ScrollView>
  );
};
export default HomePage;
