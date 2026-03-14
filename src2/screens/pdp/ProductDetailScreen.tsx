import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useProductDetails, useProducts } from '../../hooks/productHooks';
import { addItemToCart } from '../../redux/slices/CartSlice';

const ProductDetailScreen: React.FC<any> = ({ route, navigation }) => {
  const { productId } = route.params;
  const dispatch = useDispatch();
  const { data, isLoading } = useProductDetails(productId);
  const { data: similarProducts } = useProducts();

  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState(0);

  const handleAddToCart = () => {
    if (!data) return;

    const productForCart = {
      id: data.id,
      title: data.title,
      price: data.price,
      thumbnail: data.images[0], // Mapping images[0] to thumbnail
      stock: 10, // Default or from API
    };

    dispatch(addItemToCart(productForCart));

    // Optional: Feedback for user
    Alert.alert('Success', 'Added to cart!');
  };

  if (isLoading)
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#fff" />
    );

  const renderProgressBar = (stars: number, percentage: string) => (
    <View style={styles.progressRow}>
      <Text style={styles.progressLabel}>
        {stars} <Text style={{ color: '#4CAF50' }}>★</Text>
      </Text>
      <View style={styles.progressBg}>
        <View style={[styles.progressFill, { width: percentage }]} />
      </View>
      <Text style={styles.progressPercent}>{percentage}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Main Image Header */}
        <View style={styles.imageHeader}>
          <Image source={{ uri: data?.images?.[0] }} style={styles.mainImage} />
          <TouchableOpacity
            style={styles.headerBtnLeft}
            onPress={() => navigation?.goBack()}
          >
            <Text style={styles.btnTextIcon}>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtnRight}>
            <Text style={[styles.btnTextIcon, { color: '#FF4D4D' }]}>♥</Text>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.detailsCard}>
          <View style={styles.topRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.productTitle}>
                {data?.title || 'Sportwear Set'}
              </Text>
              <View style={styles.ratingRow}>
                <Text style={styles.stars}>
                  ★★★★<Text style={{ color: '#444' }}>★</Text>
                </Text>
                <Text style={styles.countText}>(83)</Text>
              </View>
            </View>
            <Text style={styles.priceTag}>$ {data?.price?.toFixed(2)}</Text>
          </View>

          {/* Color & Size Selectors */}
          <View style={styles.selectionArea}>
            <View>
              <Text style={styles.label}>Color</Text>
              <View style={styles.flexRow}>
                {['#E5C1A7', '#111', '#FF6B6B'].map((c, i) => (
                  <TouchableOpacity
                    key={i}
                    onPress={() => setSelectedColor(i)}
                    style={[
                      styles.colorDot,
                      { backgroundColor: c },
                      selectedColor === i && styles.activeDot,
                    ]}
                  />
                ))}
              </View>
            </View>
            <View>
              <Text style={styles.label}>Size</Text>
              <View style={styles.flexRow}>
                {['S', 'M', 'L'].map(s => (
                  <TouchableOpacity
                    key={s}
                    onPress={() => setSelectedSize(s)}
                    style={[
                      styles.sizeBtn,
                      selectedSize === s && styles.activeSize,
                    ]}
                  >
                    <Text
                      style={[
                        styles.sizeTxt,
                        selectedSize === s && styles.activeSizeTxt,
                      ]}
                    >
                      {s}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Accordion Sections */}
          {['Description', 'Reviews', 'Similar Product'].map((section, idx) => (
            <View key={idx}>
              <View style={styles.accordionHeader}>
                <Text style={styles.accordionTitle}>{section}</Text>
                <Text style={styles.accordionIcon}>⌵</Text>
              </View>
              {section === 'Description' && (
                <Text style={styles.descContent}>
                  {data?.description}{' '}
                  <Text style={styles.readMore}>Read more</Text>
                </Text>
              )}
              {section === 'Reviews' && (
                <View style={styles.reviewBox}>
                  <Text style={styles.bigRating}>
                    4.9 <Text style={styles.outOf}>OUT OF 5</Text>
                  </Text>
                  {renderProgressBar(5, '80%')}
                  {renderProgressBar(4, '12%')}
                </View>
              )}
            </View>
          ))}

          {/* Similar Products List */}
          <FlatList
            horizontal
            data={similarProducts}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.simProduct}>
                <Image source={{ uri: item.images[0] }} style={styles.simImg} />
                <Text style={styles.simName} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.simPrice}>$ {item.price}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Text style={styles.cartIcon}>🛍</Text>
          <Text style={styles.cartButtonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imageHeader: { height: 450, width: '100%', backgroundColor: '#F5F5F5' },
  mainImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  headerBtnLeft: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBtnRight: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextIcon: { fontSize: 20, fontWeight: 'bold' },
  detailsCard: {
    backgroundColor: '#111',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  priceTag: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  ratingRow: { flexDirection: 'row', marginTop: 5 },
  stars: { color: '#4CAF50', fontSize: 16 },
  countText: { color: '#666', marginLeft: 8 },
  selectionArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  label: { color: '#888', fontSize: 12, marginBottom: 8, fontWeight: '600' },
  flexRow: { flexDirection: 'row' },
  colorDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeDot: { borderColor: '#fff' },
  sizeBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  activeSize: { backgroundColor: '#fff' },
  sizeTxt: { color: '#888', fontWeight: 'bold' },
  activeSizeTxt: { color: '#000' },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 0.5,
    borderColor: '#333',
    marginTop: 10,
  },
  accordionTitle: { color: '#fff', fontSize: 16, fontWeight: '600' },
  accordionIcon: { color: '#fff', fontSize: 18 },
  descContent: {
    color: '#999',
    lineHeight: 20,
    fontSize: 14,
    marginBottom: 10,
  },
  readMore: { color: '#4CAF50', textDecorationLine: 'underline' },
  reviewBox: { marginBottom: 20 },
  bigRating: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  outOf: { fontSize: 12, color: '#666' },
  progressRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  progressLabel: { color: '#fff', width: 30, fontSize: 11 },
  progressBg: {
    flex: 1,
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
    marginHorizontal: 10,
  },
  progressFill: { height: 4, backgroundColor: '#fff', borderRadius: 2 },
  progressPercent: { color: '#666', width: 30, fontSize: 11 },
  simProduct: { width: 140, marginRight: 15 },
  simImg: {
    width: 140,
    height: 180,
    borderRadius: 15,
    backgroundColor: '#222',
  },
  simName: { color: '#fff', marginTop: 8, fontSize: 13 },
  simPrice: { color: '#fff', fontWeight: 'bold', marginTop: 2 },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: '#111',
  },
  cartButton: {
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: { fontSize: 20, marginRight: 8 },
  cartButtonText: { color: '#000', fontSize: 18, fontWeight: 'bold' },
});

export default ProductDetailScreen;
