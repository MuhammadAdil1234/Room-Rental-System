import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {IconButton} from 'react-native-paper';
import styles from './Styles';
const Confirmbox = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.confirm}>
        <Text style={styles.text}>Pending...</Text>
      </View>
      <View style={styles.delete}>
        <TouchableOpacity>
          <IconButton
            size={widthPercentageToDP(9)}
            icon={'delete'}
            iconColor="white"
            style={styles.starIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Confirmbox;
