import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  addItemToCart,
  removeItemFromCart,
} from '../../redux/slices/CartSlice';
import navigationStrings from '../../navigation/navigationStrings';

const CartScreen: React.FC<any> = ({ navigation }) => {
  const dispatch = useDispatch();

  const { entities, ids, totalAmount } = useSelector(
    (state: RootState) => state.cart,
  );
  const cartItems = ids.map(id => entities[id]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Cart</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty</Text>
        ) : (
          cartItems.map(item => (
            <View key={item.id} style={styles.cartCard}>
              <Image source={{ uri: item.thumbnail }} style={styles.itemImg} />

              <View style={styles.itemInfo}>
                <View style={styles.infoTop}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <View style={styles.checkbox}>
                    <Text style={styles.checkIcon}>✓</Text>
                  </View>
                </View>

                <Text style={styles.itemPrice}>$ {item.price.toFixed(2)}</Text>

                <View style={styles.infoBottom}>
                  <Text style={styles.itemMeta}>Size: L | Color: Cream</Text>

                  {/* Quantity Controls */}
                  <View style={styles.qtyContainer}>
                    <TouchableOpacity
                      onPress={() => dispatch(removeItemFromCart(item.id))}
                      style={styles.qtyBtn}
                    >
                      <Text style={styles.qtyBtnText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => dispatch(addItemToCart(item))}
                      style={styles.qtyBtn}
                    >
                      <Text style={styles.qtyBtnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      {/* Checkout Summary Section */}
      <View style={styles.footer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Product price</Text>
          <Text style={styles.summaryValue}>${totalAmount.toFixed(0)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping</Text>
          <Text style={styles.summaryValue}>Freeship</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.summaryRow}>
          <Text style={styles.subtotalLabel}>Subtotal</Text>
          <Text style={styles.subtotalValue}>${totalAmount.toFixed(0)}</Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate(navigationStrings.CHECKOUT)}
        >
          <Text style={styles.checkoutBtnText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E2127' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2A2D35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  scrollContent: { padding: 20 },
  emptyText: { color: '#888', textAlign: 'center', marginTop: 50 },
  cartCard: {
    flexDirection: 'row',
    backgroundColor: '#111',
    borderRadius: 20,
    padding: 12,
    marginBottom: 15,
    overflow: 'hidden',
  },
  itemImg: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: '#FFF',
  },
  itemInfo: { flex: 1, marginLeft: 15, justifyContent: 'space-between' },
  infoTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: { color: '#FFF', fontSize: 14, fontWeight: '600', width: '80%' },
  checkbox: {
    width: 22,
    height: 22,
    backgroundColor: '#4A6163',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: { color: '#FFF', fontSize: 12 },
  itemPrice: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginTop: 4 },
  infoBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemMeta: { color: '#888', fontSize: 12 },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2D35',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qtyBtn: { paddingHorizontal: 8 },
  qtyBtnText: { color: '#FFF', fontSize: 16 },
  qtyText: { color: '#FFF', paddingHorizontal: 10, fontWeight: 'bold' },
  footer: {
    backgroundColor: '#111',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    paddingBottom: 40,
    marginBottom: 60,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryLabel: { color: '#AAA', fontSize: 15 },
  summaryValue: { color: '#FFF', fontSize: 15, fontWeight: 'bold' },
  divider: { height: 1, backgroundColor: '#222', marginBottom: 20 },
  subtotalLabel: { color: '#FFF', fontSize: 16 },
  subtotalValue: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  checkoutBtn: {
    backgroundColor: '#FFF',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  checkoutBtnText: { color: '#000', fontSize: 16, fontWeight: 'bold' },
});

export default CartScreen;
