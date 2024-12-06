import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS, FONTSIZE, COLOR } from "../../../constants";

const ButtonPrimary = ({ btnText, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.blueGradient,
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_16,
    color: COLOR.white,
  },
});
