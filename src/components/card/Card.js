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
const Card = props => {
  const [popUp, isPopUp] = useState(false);
  const [popHelp, isPopHelp] = useState(false);
  return (
    <TouchableOpacity
      onPress={
        props.name == 'About'
          ? () => isPopUp(true)
          : props.name == 'Help'
          ? () => isPopHelp(true)
          : null
      }>
      <View style={styles.cardOne}>
        <IconButton
          icon={props.icon}
          size={widthPercentageToDP(15)}
          style={styles.icon}
        />
        <Text style={styles.bookText}>{props.name}</Text>
      </View>
      {popUp || popHelp ? (
        <Popup
          hiden1={popUp}
          hiden2={popHelp}
          hiden={isPopUp}
          hidenn={isPopHelp}
        />
      ) : null}
    </TouchableOpacity>
  );
};
export default Card;
