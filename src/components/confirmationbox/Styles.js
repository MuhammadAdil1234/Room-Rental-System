import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(10),
    borderRadius: widthPercentageToDP(10),
    marginBottom: heightPercentageToDP(2),
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

  confirm: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(22),
    fontWeight: 'bold',
    color: '#C58BF2',
  },
  delete: {
    flex: 1,
    borderTopRightRadius: widthPercentageToDP(10),
    borderBottomRightRadius: widthPercentageToDP(10),
    backgroundColor: '#C58BF2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
