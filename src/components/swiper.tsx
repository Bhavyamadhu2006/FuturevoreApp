import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import { slides } from "../data/splashSlidesData";
import { Button } from "native-base";

const { width, height } = Dimensions.get("window");

const SwiperComponent: React.FC = () => {
  const scrollRef = useRef<SwiperFlatList | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = (index: number): void => {
    if (scrollRef.current) {
      scrollRef.current.scrollToIndex({ index });
    }
  };

  const goToNextSlide = (): void => {
    if (scrollRef.current) {
      const nextIndex = (currentIndex + 1) % slides.length;
      scrollRef.current.scrollToIndex({ index: nextIndex });
      setTimeout(() => {
        setCurrentIndex(nextIndex);
      }, 500);
    }
  };

  return (
    <View style={styles.container}>
      <SwiperFlatList
        showPagination={false}
        ref={scrollRef}
        onChangeIndex={({ index }) => setCurrentIndex(index)}
      >
        {slides.map((slide, index) => (
          <TouchableOpacity
            key={index}
            style={styles.child}
            onPress={() => goToIndex(index)}
          >
            <View>
              <Image source={slide.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.description}>{slide.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </SwiperFlatList>

      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Button style={styles.button} onPress={() => goToNextSlide()}>
            Next
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SwiperComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  child: {
    height: height * 0.5,
    width,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginBottom: 40,
  },
  textContainer: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 100,
  },
  button: {
    marginBottom: 15,
    width: 300,
  },
});
