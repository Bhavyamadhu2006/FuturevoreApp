import React, { useRef } from "react";
import {
  Alert,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";

import Pagination from "./Pagination";

const { width, height } = Dimensions.get("window");

const SwiperComponent: React.FC = () => {
  const scrollRef = useRef<SwiperFlatList | null>(null);

  const goToLastIndex = () => {
    scrollRef.current?.goToLastIndex();
  };

  const goToFirstIndex = () => {
    scrollRef.current?.goToFirstIndex();
  };

  const goToSecondIndex = () => {
    scrollRef.current?.scrollToIndex({ index: 1 });
  };

  const getCurrentIndex = () => {
    const currentIndex = scrollRef.current?.getCurrentIndex() ?? 0;
    Alert.alert(`the current index is ${currentIndex}`);
  };

  const getPrevIndex = () => {
    const prevIndex = scrollRef.current?.getPrevIndex() ?? 0;
    Alert.alert(`the previous index is ${prevIndex}`);
  };

  const onChangeIndex = ({ index, prevIndex }: any) => {
    console.log({ index, prevIndex });
  };

  return (
    <SwiperFlatList
      showPagination
      PaginationComponent={Pagination}
      ref={scrollRef}
      onChangeIndex={onChangeIndex}
    >
      <TouchableOpacity style={styles.child} onPress={goToLastIndex}>
        <View>
          <Image source={require("../images/food.jpg")} style={styles.image} />
          <Text style={styles.text}>
            From savory main courses to delectable desserts, discover
            easy-to-follow recipes that are both healthy and cruelty-free.
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.child} onPress={getPrevIndex}>
        <View>
          <Image
            source={require("../images/livewell.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Support local home-based kitchens and order delicious vegan meals
            prepared with love. Connect with talented home cooks who offer a
            range of vegan dishes, delivering fresh and homemade food right to
            your doorstep
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.child} onPress={getCurrentIndex}>
        <View>
          <Image
            source={require("../images/meditate.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Practice mindfulness, reduce stress, and find inner peace through
            meditation practices tailored to enhance your well-being
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.child} onPress={goToSecondIndex}>
        <View>
          <Image source={require("../images/soil.jpg")} style={styles.image} />
          <Text style={styles.text}>
            Explore resources and articles on sustainability, conservation, and
            how your food choices contribute to a greener planet
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.child} onPress={goToFirstIndex}>
        <View>
          <Image source={require("../images/steps.jpg")} style={styles.image} />
          <Text style={styles.text}>
            Stay active, maintain a balanced lifestyle, and achieve your fitness
            goals with plant-based nutrition
          </Text>
        </View>
      </TouchableOpacity>
    </SwiperFlatList>
  );
};

const styles = StyleSheet.create({
  child: {
    height: height * 0.5,
    width,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginBottom: 70,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 8,
    fontWeight: "bold",
  },
});

export default SwiperComponent;
