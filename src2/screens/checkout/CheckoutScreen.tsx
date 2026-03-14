import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckoutHeader from './components/CheckoutHeader';
import ProgressSteps from './components/ProgressSteps';
import ShippingForm from './components/ShippingForm';
import ShippingMethods from './components/ShippingMethods';

const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      <CheckoutHeader title="Check out" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollPadding}
      >
        <ProgressSteps />

        <Text style={styles.stepText}>STEP 1</Text>
        <Text style={styles.sectionTitle}>Shipping</Text>

        <ShippingForm />

        <Text style={styles.subSectionTitle}>Shipping method</Text>
        <ShippingMethods />

        <Text style={styles.subSectionTitle}>Coupon Code</Text>
        <View style={styles.couponContainer}>
          <Text style={styles.couponPlaceholder}>
            Have a code? type it here...
          </Text>
          <TouchableOpacity>
            <Text style={styles.validateText}>Validate</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueText}>Continue to payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollPadding: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  stepText: {
    color: '#888',
    fontSize: 12,
    marginTop: 20,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subSectionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 15,
  },
  couponContainer: {
    backgroundColor: '#2A2C32',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  couponPlaceholder: {
    color: '#888',
    fontSize: 14,
  },
  validateText: {
    color: '#888',
    fontSize: 14,
  },
  continueBtn: {
    backgroundColor: '#FFF',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  continueText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
