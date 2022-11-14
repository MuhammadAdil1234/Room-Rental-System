import React from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {IconButton} from 'react-native-paper';
import styles from './Styles';
import { AppStrings } from '../../globals/Strings';
const Popup = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.hiden1 || props.hiden2}>
      <View style={styles.modal}>
        {props.hiden1 ? (
          <View style={styles.modalItemContainer}>
            <Text style={styles.logoText}>{AppStrings.roomRental}</Text>
            <View style={styles.iconImage}>
              <IconButton
                size={widthPercentageToDP(18)}
                icon={'account'}
                iconColor="#C58BF2"
              />
            </View>
            <Text style={styles.name}>Muhammad Adil </Text>
            <Text style={styles.email}>{AppStrings.email}</Text>
            <Pressable onPress={() => props.hiden(false)} style={styles.button}>
              <Text style={styles.colorName}>{AppStrings.close}</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.modalItemContainer}>
            <Text style={styles.helpText}>{AppStrings.help}</Text>
            <View style={styles.centerText}>
              <Text style={styles.name}>{AppStrings.contactForHelp}</Text>
              <Text style={styles.email}>{AppStrings.email}</Text>
            </View>
            <Pressable
              onPress={() => props.hidenn(false)}
              style={styles.closeButton}>
              <IconButton
                size={widthPercentageToDP(10)}
                icon={'close'}
                iconColor="white"
                style={styles.starIcon}
              />
            </Pressable>
          </View>
        )}
      </View>
    </Modal>
  );
};
export default Popup;
