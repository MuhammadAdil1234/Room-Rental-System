import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
modalItemContainer: {
    backgroundColor: 'white',
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(52),
    borderRadius: widthPercentageToDP(2),
    justifyContent: 'space-around',
    borderRadius: widthPercentageToDP(10),
    alignItems: 'center',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5.62,
    elevation: 10,
  },
  forEmail:{
    alignItems: 'center'
  },
  logoText:{
    fontSize: RFValue(26),
    fontWeight: 'bold',
    color: '#C58BF2',
  },
  iconImage:{
    width: widthPercentageToDP(24),
    height: widthPercentageToDP(24),
    borderRadius: widthPercentageToDP(12),
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name:{
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  email:{
    fontSize: RFValue(14)
  },
  button:{
    width: widthPercentageToDP(35),
    height: heightPercentageToDP(6),
   backgroundColor: '#C58BF2',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: widthPercentageToDP(4)
  },
  colorName:{
    color: 'white',
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },
  help:{
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  helpText:{
    fontSize: RFValue(34),
    fontWeight: 'bold',
    color: '#C58BF2',
  },
  centerText:{
    alignItems:'center'
  },
  closeButton:{
    width: widthPercentageToDP(15),
    height: widthPercentageToDP(15),
   backgroundColor: '#C58BF2',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: widthPercentageToDP(7.5),
  }
});
export default styles;
