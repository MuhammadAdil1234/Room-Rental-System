import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    inputText:{marginBottom: 8, height: heightPercentageToDP(6.8)},
    setIcon:{marginTop: heightPercentageToDP(1.5)}
});
export default styles;