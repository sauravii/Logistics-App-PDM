import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR, FONTSIZE } from "../../../constants";

const PercentBBox = ({ percentage, profit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>
        {profit ? "-" : "+"} {percentage} %
      </Text>
    </View>
  );
};

export default PercentBBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(120, 217, 113, 0.53)",
    alignSelf: "flex-start",
    paddingHorizontal: 5,
    marginLeft: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0, 0.33)",
  },
  priceText: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_12,
    color: COLOR.greenText,
  },
});
