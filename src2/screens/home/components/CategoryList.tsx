import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import imagepath from '../../../constants/imagepath';
import { Sizes } from '../../../styles/sizes';

const data = [
  { id: 1, image: imagepath.WOMEN, name: 'Women' },
  { id: 2, image: imagepath.MEN, name: 'Men' },
  { id: 3, image: imagepath.ACCESSORY, name: 'Accessories' },
  { id: 4, image: imagepath.BEAUTY, name: 'Beauty' },
];

const CategoryList = () => {
  const [selectedId, setSelectedId] = useState<number>(1);

  const renderItem = ({ item }: { item: (typeof data)[0] }) => {
    const isSelected = item.id === selectedId;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setSelectedId(item.id)}
        style={styles.itemContainer}
      >
        <View style={[styles.outerRing, isSelected && styles.selectedRing]}>
          <View
            style={[styles.imageWrapper, !isSelected && styles.unselectedTint]}
          >
            <Image source={item.image} style={styles.image} />
          </View>
        </View>

        <Text style={[styles.label, isSelected && styles.selectedLabel]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: Sizes.size_15,
  },
  listPadding: {
    paddingHorizontal: 16,
    gap: 18,
  },
  itemContainer: {
    alignItems: 'center',
    width: 80,
  },
  outerRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedRing: {
    borderColor: '#FFFFFF',
  },
  imageWrapper: {
    width: 44,
    height: 44,
    borderRadius: 27,
    overflow: 'hidden',
    backgroundColor: '#1f2024',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unselectedTint: {
    opacity: 0.5,
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  label: {
    marginTop: 10,
    fontSize: 12,
    color: '#9BA0A6',
    fontWeight: '400',
  },
  selectedLabel: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
