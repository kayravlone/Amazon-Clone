import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import React, {useState,useCallback} from 'react';
import styles from './ImageCarousel.style';

const ImageCarousel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const onFlatList = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
    console.log(viewableItems);
  },[]);
  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.images, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatList}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
