import React from 'react';
import { Text } from 'react-native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import Confirmbox from './src/components/confirmationbox/Confirmbox';
import CustomInputBox from './src/components/custom_input/custom_input_box';
import Popup from './src/components/popup/Popup';
import Confirmbooking from './src/Screens/confirmbooking/Confirmbooking';
import HomePage from './src/Screens/home/Home';
import Mainpage from './src/Screens/mainpage/Mainpage';
import Signin from './src/Screens/signin/Signin';
import Signup from './src/Screens/signup/Signup';
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