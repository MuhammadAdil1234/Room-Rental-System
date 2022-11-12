import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  cardOne: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: widthPercentageToDP(43),
    height: heightPercentageToDP(25),
    borderWidth: 0,
    shadowColor: '#C58BF2',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 6,
  },
  icon:{
    marginTop: heightPercentageToDP(1),
  },
  bookText:{
    fontSize: RFValue(20),
    fontWeight: 'bold',
    // color: '#C58BF2',
    marginBottom: heightPercentageToDP(1)
  }
});
export default styles;
