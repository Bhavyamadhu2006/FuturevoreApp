import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Button,
} from "react-native";

interface splash {}

const SplashScreen: FC<splash> = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Splash Screen.</Text>
      <View>
        <Text>Click me</Text>
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
