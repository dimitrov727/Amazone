import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import product from '../../data/product';
import productStyles from './productStyles';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  console.log(selectedOption);
  return (
    <ScrollView style={productStyles.root}>
      <Text style={productStyles.title}>{product.title}</Text>

      <ImageCarousel images={product.images} />

      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      <Text style={productStyles.price}>
        From ${product.price}
        {product.oldPrice && (
          <Text style={productStyles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>
      <Text style={productStyles.description}>{product.description}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <Button text={'Add to cart'} onPress={() => {}} />
      <Button text={'Buy Now'} onPress={() => {}} />
    </ScrollView>
  );
};

export default ProductScreen;
