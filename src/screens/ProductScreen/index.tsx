import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import product from '../../data/product';
import productStyles from './productStyles';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  console.log(selectedOption);
  return (
    <View>
      <Text style={productStyles.title}>{product.title}</Text>

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

      <QuantitySelector />
    </View>
  );
};

export default ProductScreen;
