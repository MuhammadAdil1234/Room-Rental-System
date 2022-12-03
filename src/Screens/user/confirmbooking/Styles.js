import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    mainContainer:{
        flexGrow: 1,
        paddingHorizontal: widthPercentageToDP(3),
        paddingVertical: heightPercentageToDP(3),
        alignItems: 'center'
    },
    text:{
        fontSize: RFValue(26),
        fontWeight: 'bold',
        // color: '#C58BF2',
        marginBottom: heightPercentageToDP(3)
    }
});
export default styles;
