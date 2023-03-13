import React from 'react';
import { Text } from 'react-native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import AdminCard from './src/components/admincard/AdminCard';
import Booking from './src/components/bookingdetail/Booking';
import Input from './src/components/user_input/Input';
import Navigate from './src/nevigate/navigation';
import TableData from './src/Screens/admin/confirm/TableData';
import MainPageAdmin from './src/Screens/admin/mainpage/MainPageAdmin';
import AdminLogin from './src/Screens/admin/signin/AdimLogin';
import UploadDetail from './src/Screens/admin/uploaddetail/UploadDetail';
import HomePage from './src/Screens/home/Home';
import BookingPage from './src/Screens/user/bookingPage/BookingPage';
import Form from './src/Screens/user/clientform/Form';
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
     <Navigate/>
    </PaperProvider>
  );
};
export default App;