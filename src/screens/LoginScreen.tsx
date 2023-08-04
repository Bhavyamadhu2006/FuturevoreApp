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

interface login {}

const LoginScreen: FC<login> = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
