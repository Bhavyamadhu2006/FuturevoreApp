import { StyleSheet } from "react-native";
import AuthStack from "./src/navigation/stackNavigator/AuthStackNavigator";
import React from "react";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthStack />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
