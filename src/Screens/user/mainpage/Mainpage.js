import React, {useState} from 'react';
import {
  ScrollView,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Card from '../../../components/card/Card';
import {AppImages} from '../../../globals/Imagelinks';
import styles from './Styles';
const Mainpage = ({navigation}) => {
  // const [color, isColor]=useState('#C58BF2');
  const [image, isImage] = useState(true);
  const [images, setimages] = useState([
    AppImages.room1,
    AppImages.room2,
    AppImages.room3,
  ]);
  return (
    <ScrollView keyboardDismissMode="on-drag">
      <View style={styles.mainContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={({item, index}) => (
            <TouchableOpacity>
              <Image source={item} key={index} style={styles.image} />
            </TouchableOpacity>
          )}
        />
        <View style={styles.circleContainer}>
          <View
            style={[
              styles.circle,
              image ? {backgroundColor: '#C58BF2'} : null,
            ]}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
        </View>
        <View style={styles.cardContainer}>
          <Card name="Booking" icon="format-list-checkbox" navigation={navigation}/>
          <Card name="Orders" icon="book-check" navigation={navigation}/>
        </View>
        <View style={styles.cardContainer}>
          <Card name="Help" icon="help-box" />
          <Card name="About" icon="account-check" />
        </View>
      </View>
    </ScrollView>
  );
};
export default Mainpage;
