
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        paddingHorizontal: widthPercentageToDP(4),
        paddingVertical: heightPercentageToDP(4.5),
        justifyContent: 'space-around',
      },
});
export default styles;