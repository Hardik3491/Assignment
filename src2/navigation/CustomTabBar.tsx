import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import imagepath from '../constants/imagepath';
import { Sizes } from '../styles/sizes';

const ICON_MAP: { [key: string]: any } = {
  Home: imagepath.HOME,
  Search: imagepath.SEARCH,
  Cart: imagepath.CART,
  Profile: imagepath.PROFILE,
};

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabItem}
              activeOpacity={0.7}
            >
              <Image
                source={ICON_MAP[route.name]}
                style={[
                  styles.icon,
                  { tintColor: isFocused ? '#FFFFFF' : '#666666' },
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    height: Platform.OS === 'ios' ? 80 : 70,
    borderTopLeftRadius: Sizes.size_25,
    borderTopRightRadius: Sizes.size_25,
    justifyContent: 'space-around',
    paddingTop: Platform.OS === 'ios' ? Sizes.size_20 : 0,
    alignItems: 'center',
    paddingHorizontal: Sizes.size_20,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: Sizes.size_10,
    elevation: Sizes.size_20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  icon: {
    width: Sizes.size_21,
    height: Sizes.size_21,
    resizeMode: 'contain',
  },
});

export default CustomTabBar;
