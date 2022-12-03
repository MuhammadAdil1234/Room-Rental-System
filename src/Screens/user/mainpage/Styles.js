import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: widthPercentageToDP(4),
    // paddingVertical: heightPercentageToDP(3.5),
    marginBottom: heightPercentageToDP(2),
    // justifyContent: 'space-between'
  },
  logo: {
    fontSize: RFValue(32),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#C58BF2',
  },
  image: {
    marginRight: widthPercentageToDP(1),
    marginLeft: widthPercentageToDP(1),
    height: heightPercentageToDP(30),
    width: widthPercentageToDP(98),
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: heightPercentageToDP(2),
  },
  circle: {
    // backgroundColor: '#C58BF2',
    borderWidth: 1,
    borderColor: '#C58BF2',
    width: widthPercentageToDP(4),
    height: widthPercentageToDP(4),
    borderRadius: widthPercentageToDP(2),
    marginRight: widthPercentageToDP(1.2),
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: heightPercentageToDP(3),
  },
});
export default styles;
