import {StyleSheet} from 'react-native';

const productStyles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontWeight: 'normal',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical:8
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
  images: {},
});

export default productStyles;
