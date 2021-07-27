/**
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ProductScreen from './src/screens/ProductScreen/index';
import HomeScreen from './src/screens/HomeScreen/homescreen';
import ShoppingCart from './src/screens/ShoppingCartScreen/index';
import AddressScreen from './src/screens/AdressScreen/index';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AddressScreen />
    </SafeAreaView>
  );
};

export default App;
