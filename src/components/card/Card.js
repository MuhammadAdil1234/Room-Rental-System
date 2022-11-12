import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import styles from './Styles';
import {
    heightPercentageToDP,
    widthPercentageToDP,
  } from 'react-native-responsive-screen';
const Card = props => {
  return (
    <TouchableOpacity>
      <View style={styles.cardOne}>
        <IconButton
          icon={props.icon}
          size={widthPercentageToDP(15)}
        //   iconColor="#C58BF2"
          style={styles.icon}
        />
        <Text style={styles.bookText}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
