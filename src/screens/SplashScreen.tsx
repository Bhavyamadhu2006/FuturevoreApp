import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../components/button";
import { useNavigation } from "@react-navigation/native";
import SwiperWithChildren from "./SwiperWithChildren";

interface splash {}

const SplashScreen: FC<splash> = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("LoginScreen");
    console.log("Splash Screen Button clicked");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <SwiperWithChildren />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
