import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import { useNavigation } from "@react-navigation/native";

interface first {}

const FirstScreen: FC<first> = () => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("SplashScreen");
    console.log("Button was clicked!");
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontWeight: "900" }}>Futurevore</Text>
      <View style={{ marginTop: 200 }}>
        <Button text={"Get Started"} onPress={handleClick} />
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
