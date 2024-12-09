import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR, FONTSIZE } from "../../../constants";

const PriceTag = ({ price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>Rp {price}</Text>
    </View>
  );
};

export default PriceTag;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(120, 217, 113, 0.53)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    marginLeft: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0, 0.33)",
  },
  priceText: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_14,
    color: COLOR.black,
  },
});
