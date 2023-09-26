import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './QuantitySelector.style';

const QuantitySelector = ({quantity,setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0,quantity-1));
  };
  const onPlus = () => {
    setQuantity(quantity+1)
  };
  return (
    <View style={styles.root} >
      <Pressable style={styles.button} onPress={onMinus}>
        <Text style={styles.button_text} >-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable style={styles.button} onPress={onPlus}>
        <Text style={styles.button_text} >+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;
