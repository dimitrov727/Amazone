import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {},
  image: {
    height: 200,
    resizeMode: 'contain',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    margin:5,
    backgroundColor: '#ededed'
  },
  dots: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'center',
    
  },
});

export default styles;
