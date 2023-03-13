import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  mainCard:{
    height: heightPercentageToDP(35),
    borderWidth: 0,
    justifyContent: 'center',
    borderWidth: 0,
    shadowColor: '#C58BF2',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 10,
  },
  text:{
    textAlign: 'center',
    fontSize: RFValue(22),
    fontWeight: 'bold',
    color: '#C58BF2'
  }
});
export default styles;