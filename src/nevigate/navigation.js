import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomePage from '../Screens/home/Home';
import BookingPage from '../Screens/user/bookingPage/BookingPage';
import AdminLogin from '../Screens/admin/signin/AdimLogin';
import Signup from '../Screens/user/signup/Signup';
import Signin from '../Screens/user/signin/Signin';
import Mainpage from '../Screens/user/mainpage/Mainpage';
import Booking from '../components/bookingdetail/Booking';
import Confirmbooking from '../Screens/user/confirmbooking/Confirmbooking';
import Form from '../Screens/user/clientform/Form';
import AdminCard from '../components/admincard/AdminCard';
import MainPageAdmin from '../Screens/admin/mainpage/MainPageAdmin';
import UploadDetail from '../Screens/admin/uploaddetail/UploadDetail';
import TableData from '../Screens/admin/confirm/TableData';
const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'HomePage'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Mainpage" component={Mainpage} />
        <Stack.Screen name="BookingPage" component={BookingPage} />
        <Stack.Screen name="TableData" component={TableData} />
        <Stack.Screen name="Confirmbooking" component={Confirmbooking} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="MainPageAdmin" component={MainPageAdmin} />
        <Stack.Screen name="UploadDetail" component={UploadDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigate;
