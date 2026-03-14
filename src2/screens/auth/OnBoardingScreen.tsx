import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imagepath from '../../constants/imagepath';
import colors from '../../styles/colors';
import { Sizes } from '../../styles/sizes';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../navigation/navigationStrings';

const OnBoardingScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={imagepath.LOGO}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(navigationStrings.LOGIN)}
      >
        <Text style={styles.buttonText}>Get Started</Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: Sizes.size_400,
    height: Sizes.size_400,
  },

  button: {
    marginHorizontal: 24,
    marginBottom: Sizes.size_30,
    backgroundColor: '#E6E6E6',
    borderRadius: 40,
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B6B6B',
  },

  arrow: {
    fontSize: 22,
    color: '#6B6B6B',
  },
});
