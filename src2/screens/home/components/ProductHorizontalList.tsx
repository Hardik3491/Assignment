import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import SectionHeader from './SectionHeader';
import { useProducts } from '../../../hooks/productHooks';
import ProductCard from '../../globalComponents/ProductCard';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../../navigation/navigationStrings';

interface Props {
  title: string;
}

const ProductHorizontalList = ({ title }: Props) => {
  const navigation = useNavigation<any>();
  const { data } = useProducts();

  return (
    <>
      <SectionHeader title={title} />

      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate(navigationStrings.PDP, { productId: item.id })
            }
          />
        )}
      />
    </>
  );
};

export default ProductHorizontalList;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
});
