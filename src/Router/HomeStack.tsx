import React from 'react';
import HomeScreen from '../screens/HomeScreen/homescreen';
import ProductScreen from '../screens/ProductScreen/index';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomNavTab';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#69ebff'}}>
      <View
        style={{
          height: 40,
          margin: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <Feather name="search" size={20} />
        <TextInput
          style={{
            height: 40,
            marginLeft: 10,
          }}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name="HomeScreen">
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductScreen" />
    </Stack.Navigator>
  );
};

export default HomeStack;
