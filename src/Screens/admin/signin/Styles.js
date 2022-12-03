import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: heightPercentageToDP(3),
    justifyContent:'flex-start'
  },
  textContainer:{
    alignItems: 'center',
    marginTop: heightPercentageToDP(5),
    marginBottom: heightPercentageToDP(2)
  },
  heyThere:{
    fontSize: RFValue(16),
    color: '#7B6F72'
  },
  welcomeBack:{
    fontSize: RFValue(26),
    fontWeight:"bold",
    color: '#C58BF2'
  },
  buttonContainer:{
    alignSelf: 'center',
    marginTop: heightPercentageToDP(2.1)
  },
});
export default styles;