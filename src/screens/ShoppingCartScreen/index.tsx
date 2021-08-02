import React from 'react';
import {View, StyleSheet, FlatList, Text, Pressable} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';
import styles from './style';
import cart from '../../data/cart';
import {useNavigation} from '@react-navigation/native';

const ShoppingCartScreen = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AddressScreen');
  };

  const totalPrice = cart.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize: 18}}>
          Subtotal ({cart.length} items):{' '}
          <Text style={{color: '#eb3c10', fontWeight: 'bold'}}>
            ${totalPrice.toFixed(2)}
          </Text>
        </Text>

        <Button text="Proceed to checkout" onPress={onPress  } />
      </View>

      <FlatList
        data={cart}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
      />
    </View>
  );
};

export default ShoppingCartScreen;
