import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import styles from './style';
const CustomInputBox = props => {
  const [showPassword, setShowPassword] = useState(props.isHiddenField);
  return (
    <TextInput
      mode="outlined"
      value={props.value}
      defaultValue={props.value}
      style={styles.inputText}
      placeholder={props.label}
      activeOutlineColor="#F7F8F8"
      placeholderTextColor="#ADA4A5"
      secureTextEntry={showPassword}
      onChangeText={(newText) => props.onChangeText(newText)}
      theme={{
        colors: {
          outline: '#F7F8F8',
          background: '#EEEFEF',
        },
      }}
      left={<TextInput.Icon icon={props.icon} style={styles.setIcon} />}
      right={
        props.isHiddenField ? (
          <TextInput.Icon
            style={styles.setIcon}
            animated={true}
            icon={showPassword ? 'eye' : 'eye-off'}
            onPress={() => setShowPassword(!showPassword)}
          />
        ) : null
      }
    />
  );
};
export default CustomInputBox;