import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import imagepath from '../../../constants/imagepath';

const banners = [
  { id: 1, banner: imagepath.BANNER },
  { id: 2, banner: imagepath.BANNER },
  { id: 3, banner: imagepath.BANNER },
];

const width = Dimensions.get('window').width;

const BannerCarousel = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselWrapper}>
        <Carousel
          ref={ref}
          width={width}
          height={width / 2}
          data={banners}
          onProgressChange={progress}
          renderItem={({ item }) => (
            <View style={styles.bannerImage}>
              <Image
                source={item.banner}
                resizeMode="cover"
                style={styles.image}
              />
            </View>
          )}
        />

        <View style={styles.paginationContainer}>
          <Pagination.Basic
            progress={progress}
            data={banners}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            containerStyle={{ gap: 8 }}
            onPress={onPressPagination}
          />
        </View>
      </View>
    </View>
  );
};

export default BannerCarousel;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  carouselWrapper: {
    position: 'relative',
    width: width,
    height: width / 2,
  },
  bannerImage: {
    width: width,
    height: width / 2,
    paddingHorizontal: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 5,
    width: 8,
    height: 8,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 10,
    height: 10,
  },
});
