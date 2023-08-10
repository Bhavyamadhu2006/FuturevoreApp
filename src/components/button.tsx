import React, { FC } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";

const width = Dimensions.get("window").width;

interface button {
  text: string;
  onPress: () => void;
}

const ButtonComponent: FC<button> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: "black",
    paddingVertical: 8,
    width: width / 1.3,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 15,
  },
  btnTextStyle: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ButtonComponent;
