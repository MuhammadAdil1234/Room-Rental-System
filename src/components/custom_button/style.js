import { StyleSheet } from "react-native";
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: heightPercentageToDP(7.5),
      backgroundColor: '#C58BF2',
      borderRadius: widthPercentageToDP(8),
    },
    labelStyle: {
      color: '#FFFFFF',
      fontSize: RFValue(16),
      fontWeight: 'bold'
    },
    iconOne:{
      position: 'absolute',
      left: widthPercentageToDP(49),
      bottom: heightPercentageToDP(0.8),
    },
    iconTwo:{
      position: 'absolute',
      right: widthPercentageToDP(53),
      bottom: heightPercentageToDP(0.6),
    }
  });
  export default styles;