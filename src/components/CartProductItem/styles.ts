import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    margin: 10,
    borderWidth: 2,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  img: {
    height: 150,
    flex: 2,
    resizeMode: 'contain',
    marginLeft:10,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  ratings: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
  },
  star: {
    margin: 2,
  },
  oldPrice: {
    fontWeight: 'normal',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  quantity: {
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export default styles;
