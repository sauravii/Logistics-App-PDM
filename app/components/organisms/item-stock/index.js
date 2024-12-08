import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IcDot, IcOptions } from "../../../assets/icons";
import { FONTS, FONTSIZE, COLOR } from "../../../constants";

const ItemStock = ({ itemName, itemStock, onPressOptions, itemSatuan }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemDot}>
        <IcDot />
        <View>
          <Text style={styles.itemName}>{itemName}</Text>
          <Text style={styles.itemStock}>
            Stock : {itemStock} {itemSatuan}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPressOptions}>
        <IcOptions />
      </TouchableOpacity>
    </View>
  );
};

export default ItemStock;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderColor: COLOR.black,
    borderWidth: 1,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 10,
  },
  itemDot: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  itemName: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_18,
    color: COLOR.black,
  },
  itemStock: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_14,
    color: COLOR.black,
  },
});
