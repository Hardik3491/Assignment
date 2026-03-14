import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import imagepath from '../../../constants/imagepath';

const { width } = Dimensions.get('window');

const PromoBanner = () => {
  return (
    <View style={styles.container}>
      {/* Text Content Area */}
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <View style={styles.verticalLine} />
          <Text style={styles.subTitle}>NEW COLLECTION</Text>
        </View>

        <Text style={styles.mainTitle}>HANG OUT{'\n'}& PARTY</Text>
      </View>

      {/* Right Side: Decorative Circles and Girl Image */}
      <View style={styles.imageContainer}>
        {/* Background Decorative Circle */}
        <View style={styles.circleBg} />

        <Image
          source={imagepath.PROMO}
          style={styles.girlImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default PromoBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23262F', // Matches your dark grey background
    width: width,
    height: 180,
    alignSelf: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    overflow: 'hidden',
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  verticalLine: {
    width: 2,
    height: 15,
    backgroundColor: '#9BA0A6',
    marginRight: 8,
  },
  subTitle: {
    color: '#9BA0A6',
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: '400',
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '300', // Thin font style as per image
    lineHeight: 34,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  circleBg: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Very subtle overlay circle
    bottom: 10,
    right: 10,
  },
  girlImage: {
    width: '100%',
    height: '100%', // Makes image slightly taller than container for pop-out effect
    bottom: 0,
  },
});
