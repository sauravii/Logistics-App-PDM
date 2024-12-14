import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { IcChevronRight } from "../../../assets/icons";
import { COLOR, FONTSIZE } from "../../../constants";

const ListBarang = ({ menuTitle, menuDesc, onPressChevron, itemSumPrice, itemName, itemPrice, itemQty, itemSatuan, isPhaseTwo = false }) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.menuTitle}>{menuTitle}</Text>
        <Text style={[styles.menuDesc, { width: isPhaseTwo ? "40%" : "62%" }]}>PRODUK</Text>
        {isPhaseTwo ? (
          <View>
            <Text style={[styles.menuTitle, { width: isPhaseTwo ? "100%" : null }]}>Rp {itemSumPrice}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.containerBarang}>
        <View style={{ width: "33%" }}></View>
        <Text style={styles.barang}>{itemName}</Text>
        <Text style={styles.barang}>Rp {itemPrice}</Text>
        <Text style={styles.barang}>
          Jumlah: {itemQty} {itemSatuan}
        </Text>
      </View>
    </View>
  );
};

export default ListBarang;

const styles = StyleSheet.create({
  outerContainer: {
    paddingVertical: 15,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },
  menuTitle: {
    fontFamily: "Inter-Medium",
    fontSize: 15,
    color: COLOR.black,
    width: "33%",
  },
  menuDesc: {
    color: "rgba(0,0,0,0.5)",
  },
  barang: {
    fontFamily: "Inter-Regular",
    fontSize: FONTSIZE.dp_14,
    color: COLOR.black,
    width: "33%",
  },
  containerBarang: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },
});
