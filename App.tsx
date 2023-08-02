import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstScreen from "./src/screens/FirstScreen";
import AuthStack from "./src/navigation/stackNavigator/AuthStackNavigator";

export default function App() {
  return <AuthStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
