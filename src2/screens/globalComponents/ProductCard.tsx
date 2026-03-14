import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../../services/types';
import { Sizes } from '../../styles/sizes';

interface Props {
  product: Product;
  onPress: () => void;
}

const ProductCard = ({ product, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.images[0] }} style={styles.image} />

      <Text style={styles.title} numberOfLines={1}>
        {product.title}
      </Text>

      <Text style={styles.price}>${product.price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    marginRight: Sizes.size_8,
    marginVertical: Sizes.size_10,
  },
  image: {
    width: 140,
    height: 190,
    borderRadius: 14,
  },
  title: {
    fontSize: 13,
    color: '#fff',
    marginVertical: 8,
  },
  price: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});
