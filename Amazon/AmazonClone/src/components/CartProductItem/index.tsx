import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './CartProductItem.style';
import QuantitySelector from '../QuantitySelector';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    product: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}



const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, product} = cartItem;
  const [quantity, setQuantity] = useState(quantityProp);
  if (cartItem.product) {
    console.log(cartItem.product.id); // Burada verinin mevcut olduğunu doğrulamak için koşul ekliyoruz.
    console.log(cartItem.product.title);
  }
  
  
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: cartItem.product.image,
          }}
        />

        <View style={styles.rigtContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {product.title}
          </Text>
          <View style={styles.ratingsContainer}>
            {Array.from({length: 5}, (_, index) => {
              if (index < Math.floor(product.avgRating)) {
                // Tam yıldız
                return (
                  <FontAwesome
                    key={`${product.id}-${index}`}
                    style={styles.star}
                    name="star"
                    size={18}
                    color={'#e47911'}
                  />
                );
              } else if (
                index === Math.floor(product.avgRating) &&
                product.avgRating % 1 !== 0
              ) {
                // Yarım yıldız
                return (
                  <FontAwesome
                    key={`${product.id}-half-${index}`}
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
                    key={`${product.id}-empty-${index}`}
                    style={styles.star}
                    name="star-o"
                    size={18}
                    color={'#e47911'}
                  />
                );
              }
            })}
          </View>

          <Text style={styles.price}>
            from ${product.price}
            {product.oldPrice && (
              <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;
