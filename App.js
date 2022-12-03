import React from 'react';
import { Text } from 'react-native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import Booking from './src/components/bookingdetail/Booking';
import AdminLogin from './src/Screens/admin/signin/AdimLogin';
import HomePage from './src/Screens/home/Home';
import BookingPage from './src/Screens/user/bookingPage/BookingPage';
import Confirmbooking from './src/Screens/user/confirmbooking/Confirmbooking';
import Mainpage from './src/Screens/user/mainpage/Mainpage';
import Signin from './src/Screens/user/signin/Signin';
import Signup from './src/Screens/user/signup/Signup';
const App = () => {
  return (
    <PaperProvider
      theme={{
        ...DefaultTheme,
        roundness: 16,
      }}>
     <Confirmbooking/>
    </PaperProvider>
  );
};
export default App;