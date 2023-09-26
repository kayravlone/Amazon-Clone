import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './TextInput.style';

const InputText = ({ text, placeholder, value, onChangeText, keyboardType = 'default' }) => {
  return (
    <View>
      <Text style={styles.label}>{text}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputText;
