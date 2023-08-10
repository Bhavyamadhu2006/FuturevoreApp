import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../components/button";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";

interface first {}

const FirstScreen: FC<first> = () => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("SignInScreen");
    console.log("Button was clicked!");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Futurevore</Text>
      <View style={{ marginTop: 200 }}>
        <Button style={styles.button} onPress={handleRegister}>
          Register
        </Button>
        <Button style={styles.button} onPress={handleClick}>
          Sign In
        </Button>
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
  subText: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  button: {
    marginBottom: 15,
    width: 300,
  },
  text: {
    fontSize: 50,
    fontWeight: "900",
  },
});
