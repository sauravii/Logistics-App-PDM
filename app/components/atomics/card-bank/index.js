import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR, FONTSIZE } from "../../../constants";
import { IcBCA } from "../../../assets/icons";

const CardBank = ({ iconBank, bankName, bankNumber }) => {
  return (
    <View style={styles.container}>
      {iconBank}
      <View>
        <Text style={styles.bankName}>{bankName}</Text>
        <Text style={styles.bankNumber}>{bankNumber}</Text>
      </View>
    </View>
  );
};

export default CardBank;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bankName: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_14,
  },
  bankNumber: {
    fontFamily: "Inter-Regular",
    fontSize: FONTSIZE.dp_12,
    color: COLOR.textSecondary,
  },
});
