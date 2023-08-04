import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";

const { width, height } = Dimensions.get("window");

const newImage = [
  require("../images/food.jpg"),
  require("../images/livewell.jpg"),
  require("../images/meditate.jpg"),
  require("../images/soil.jpg"),
  require("../images/steps.jpg"),
];
const image = (index: number) => ({ image: newImage[index % newImage.length] });

const items = Array.from(Array(5)).map((_, index) => image(index));

export default () => {
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      index={3}
      autoplayLoop
      // autoplayInvertDirection
      data={items}
      renderItem={({ item }) => (
        <Image style={styles.image} source={item.image} />
      )}
      showPagination
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: height * 0.5,
    width,
  },
});
