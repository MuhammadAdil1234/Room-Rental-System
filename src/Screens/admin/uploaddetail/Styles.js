import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    paddingHorizontal: widthPercentageToDP(6),
    paddingVertical: heightPercentageToDP(6),
    justifyContent: 'flex-start',
  },
  text:{
    textAlign: 'center',
    fontSize: RFValue(26),
    color: '#C58BF2',
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP(2)
  },
  submitButton:{
    alignItems: 'flex-end',
    marginTop: heightPercentageToDP(2)
  },
  inputMultiLine: {
    lineHeight: 23,
    textAlignVertical: 'top',
    marginTop: heightPercentageToDP(3),
    marginBottom: heightPercentageToDP(1),
    borderWidth: 2,
    borderColor: 'black',
    height: heightPercentageToDP(20)
},
});
export default styles;