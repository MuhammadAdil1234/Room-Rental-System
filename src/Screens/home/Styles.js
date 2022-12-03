import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    marginHorizontal: heightPercentageToDP(3),
  },
  imageContainer:{
    marginTop: heightPercentageToDP(6),
    alignItems: 'center'
  },
  image:{
    width: widthPercentageToDP(74),
    height: heightPercentageToDP(40)
  },
  text1:{
    // color: '#1D1617',
    fontSize: RFValue(30),
    fontWeight: 'bold',
  },
  text2:{   
    color: '#7B6F72',
    fontSize: RFValue(14)
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP(4),
  }
});
export default styles;