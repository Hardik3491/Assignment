import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DotSeparator = () => (
  <View style={styles.dotContainer}>
    {[1, 2, 3, 4, 5].map(i => (
      <View key={i} style={styles.smallDot} />
    ))}
  </View>
);

const ProgressSteps = () => {
  return (
    <View style={styles.container}>
      {/* Step 1: Shipping */}
      <View style={styles.iconWrapper}>
        <Text style={styles.stepIcon}>📍</Text>
      </View>

      <DotSeparator />

      {/* Step 2: Payment */}
      <View style={[styles.iconWrapper, { opacity: 0.4 }]}>
        <Text style={styles.stepIcon}>💳</Text>
      </View>

      <DotSeparator />

      {/* Step 3: Success */}
      <View style={[styles.iconWrapper, { opacity: 0.4 }]}>
        <Text style={styles.stepIcon}>✔️</Text>
      </View>
    </View>
  );
};

export default ProgressSteps;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25, // Standard vertical spacing
  },
  iconWrapper: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepIcon: {
    fontSize: 20,
    color: '#FFF',
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  smallDot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#444',
    marginHorizontal: 3,
  },
});
