import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  cardOne: {
    justifyContent: 'space-around',
    // width: widthPercentageToDP(43),
    height: heightPercentageToDP(35),
    borderTopRightRadius: widthPercentageToDP(8),
    borderTopLeftRadius: widthPercentageToDP(8),
    borderBottomLeftRadius: widthPercentageToDP(10),
    // borderBottomRightRadius: 20,
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
    top: heightPercentageToDP(0.5)
  },
  button:{
    bottom:heightPercentageToDP(1),
    fontWeight: 'bold'
  },
  hotelName:{
    fontSize: RFValue(22),
    fontWeight: 'bold'
  },
  detailText:{
    paddingHorizontal: widthPercentageToDP(5),
    alignSelf: 'center',
    left: widthPercentageToDP(1)
  },
  detail:{
    fontWeight: 'bold',
    fontSize: RFValue(14)
  },
  twoButton:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: heightPercentageToDP(1)
  }
});
export default styles;
