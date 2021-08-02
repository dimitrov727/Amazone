import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    console.log('pressed');
    navigation.navigate('ProductScreen', {id: item.id});
  };

  const route = useRoute();
  console.log(route.params);

  return (
    <Pressable style={styles.root} onPress={onPress}>
      <Image style={styles.img} source={{uri: item.image}} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {' '}
          {item.title}
        </Text>
        {/* ratings */}
        <View style={styles.ratings}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              id={`${item.id}`}
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          From ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
