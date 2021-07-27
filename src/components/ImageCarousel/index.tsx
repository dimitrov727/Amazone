import React, {useCallback, useState} from 'react';
import {useWindowDimensions} from 'react-native';

import {View, Text, FlatList, Image} from 'react-native';
import styles from './styles';

const ImageCarousel = ({images}: {images: string[]}) => {
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentageThreshold: 50,
        }}
      />

      {/* <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {backgroundColor: index == activeIndex ? '#c9c9c9' : '#ededed'},
            ]}
          />
        ))}
      </View> */}
    </View>
  );
};

export default ImageCarousel;
