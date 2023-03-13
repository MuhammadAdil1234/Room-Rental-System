import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    marginHorizontal: widthPercentageToDP(3),
    marginVertical: heightPercentageToDP(2),
    
  },
});
export default styles;
