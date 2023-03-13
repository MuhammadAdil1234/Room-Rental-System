import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  input:{
    borderBottomWidth: 2,
    borderColor: '#C58BF2',
    marginBottom: heightPercentageToDP(2.5)
  },
  
});
export default styles;