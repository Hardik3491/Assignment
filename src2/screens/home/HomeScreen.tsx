import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import BannerCarousel from './components/BannerCarousel';
import ProductHorizontalList from './components/ProductHorizontalList';
import PromoBanner from './components/PromoBanner';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <CategoryList />

      <BannerCarousel />

      <ProductHorizontalList title="Feature Products" />
      <PromoBanner />
      <ProductHorizontalList title="Recommended" />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2F37',
  },
});
