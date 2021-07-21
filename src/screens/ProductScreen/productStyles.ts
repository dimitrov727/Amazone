import {StyleSheet} from 'react-native';

const productStyles = StyleSheet.create({
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontWeight: 'normal',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  description: {},
});

export default productStyles;
