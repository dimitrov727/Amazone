import React from 'react';
import {ScrollView, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log(searchValue);
  return (
    <ScrollView style={styles.page}>
      {/* <ProductItem item={products[0]} /> */}

      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 5,
  },
});

export default HomeScreen;
