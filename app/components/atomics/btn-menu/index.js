import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IcStock } from "../../../assets/icons";
import { FONTS, FONTSIZE, COLOR } from "../../../constants";

const BtnMenu = ({ iconRight, menuText, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {iconRight}
      <Text style={styles.text}>{menuText}</Text>
    </TouchableOpacity>
  );
};

export default BtnMenu;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: COLOR.blueButton,
    width: "100%",
    paddingHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 18,
  },
  text: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_20,
    color: COLOR.black,
  },
});
