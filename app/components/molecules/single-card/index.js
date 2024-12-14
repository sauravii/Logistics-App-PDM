import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FONTSIZE } from "../../../constants";

const SingleCard = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SingleCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(217, 217, 217, 0.73)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.33)",
    paddingVertical: 18,
    marginBottom: 25,
    width: "100%",
  },
  text: {
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_20,
  },
});
