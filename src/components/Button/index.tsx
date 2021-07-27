import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
