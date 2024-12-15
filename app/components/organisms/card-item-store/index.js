import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLOR, FONTSIZE } from "../../../constants";

const CardItemStore = ({ itemName, itemPrice, onPressAdd }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{itemName}</Text>
      <View style={styles.textBtn}>
        <Text style={styles.itemPrice}> Rp {itemPrice}</Text>
        <TouchableOpacity style={styles.containerAdd} onPress={onPressAdd}>
          <Text style={styles.add}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardItemStore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.bluePrimary,
    flexWrap: "wrap",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 15,
  },
  itemName: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_20,
  },
  textBtn: {
    flexDirection: "row",
    width: "99%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemPrice: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_14,
  },
  containerAdd: {
    backgroundColor: COLOR.boxProfile,
    borderRadius: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  add: {
    fontFamily: "Inter-SemiBold",
    fontSize: 13,
  },
});
