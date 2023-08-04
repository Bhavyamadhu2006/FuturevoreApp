import { Alert } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

export const goToLastIndex = (scrollRef: React.RefObject<SwiperFlatList>) => {
  scrollRef.current?.goToLastIndex();
};

export const goToFirstIndex = (scrollRef: React.RefObject<SwiperFlatList>) => {
  scrollRef.current?.goToFirstIndex();
};

export const goToSecondIndex = (scrollRef: React.RefObject<SwiperFlatList>) => {
  scrollRef.current?.scrollToIndex({ index: 1 });
};

export const getCurrentIndex = (scrollRef: React.RefObject<SwiperFlatList>) => {
  const currentIndex = scrollRef.current?.getCurrentIndex() ?? 0;
  Alert.alert(`The current index is ${currentIndex}`);
};

export const getPrevIndex = (scrollRef: React.RefObject<SwiperFlatList>) => {
  const prevIndex = scrollRef.current?.getPrevIndex() ?? 0;
  Alert.alert(`The previous index is ${prevIndex}`);
};
