import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './ProductItem.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

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
    console.warn('item pressed');
    navigation.navigate('ProductDetails', {id: item.id});
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.rigtContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <View style={styles.ratingsContainer}>
            {Array.from({length: 5}, (_, index) => {
              if (index < Math.floor(item.avgRating)) {
                // Tam yıldız
                return (
                  <FontAwesome
                    key={`${item.id}-${index}`}
                    style={styles.star}
                    name="star"
                    size={18}
                    color={'#e47911'}
                  />
                );
              } else if (
                index === Math.floor(item.avgRating) &&
                item.avgRating % 1 !== 0
              ) {
                // Yarım yıldız
                return (
                  <FontAwesome
                    key={`${item.id}-half-${index}`}
                    style={styles.star}
                    name="star-half-full"
                    size={18}
                    color={'#e47911'}
                  />
                );
              } else {
                // Boş yıldız
                return (
                  <FontAwesome
                    key={`${item.id}-empty-${index}`}
                    style={styles.star}
                    name="star-o"
                    size={18}
                    color={'#e47911'}
                  />
                );
              }
            })}
            <Text>{item.avgRating.toFixed(2)}</Text>
          </View>
          <Text style={styles.price}>
            from ${item.price.toFixed(2)}
            {item.oldPrice && (
              <Text style={styles.oldPrice}> ${item.oldPrice.toFixed(2)} </Text>
            )}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;
