import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PercentBBox from "../../atomics/percent-box";
import { FONTSIZE } from "../../../constants";

const CardLaba = ({ title, price, percentage }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export default CardLaba;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.79)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingVertical: 15,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    width: "47%",
  },
  title: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_16,
    color: "rgba(0,0,0,0.5)",
  },
  price: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_18,
  },
});
