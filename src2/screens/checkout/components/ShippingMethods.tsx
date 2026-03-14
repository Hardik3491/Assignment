import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ShippingMethods = () => {
  const [selected, setSelected] = useState(0);

  const methods = [
    {
      id: 0,
      title: 'Free',
      sub: 'Delivery to home',
      time: '3 to 7 business days',
    },
    {
      id: 1,
      title: '$ 9.90',
      sub: 'Delivery to home',
      time: '4 to 6 business days',
    },
    {
      id: 2,
      title: '$ 9.90',
      sub: 'Fast Delivery',
      time: '2 to 3 business days',
    },
  ];

  return (
    <View style={styles.container}>
      {methods.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => setSelected(item.id)}
          style={[styles.card, selected === item.id && styles.selectedCard]}
        >
          <View
            style={[styles.radio, selected === item.id && styles.radioActive]}
          >
            {selected === item.id && <View style={styles.radioInner} />}
          </View>
          <View style={styles.textGroup}>
            <View style={styles.row}>
              <Text style={styles.price}>{item.title}</Text>
              <Text style={styles.subText}>{item.sub}</Text>
            </View>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ShippingMethods;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  card: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  selectedCard: {
    backgroundColor: '#1C1C1E',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  radioActive: {
    borderColor: '#4CAF50',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
  textGroup: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  price: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  subText: {
    color: '#FFF',
  },
  timeText: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
});
