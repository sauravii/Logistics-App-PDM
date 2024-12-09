import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PriceTag from "../../atomics/price-tag";
import { COLOR, FONTSIZE } from "../../../constants";
import { IcDotBlue } from "../../../assets/icons";

const CardPenjualan = ({ buyerName, date, itemName, itemQty, satuan, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dotText}>
        <IcDotBlue />
        <View>
          <Text style={styles.buyerName}>{buyerName}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.itemName}>{itemName}</Text>
          <Text style={styles.qty}>
            Jumlah: {itemQty} {satuan}
          </Text>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total</Text>
        <PriceTag price={price} />
      </View>
    </View>
  );
};

export default CardPenjualan;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLOR.blueBaby,
    width: "98%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "rgba(0,0,0, 0.33)",
    marginBottom: 10,
  },
  dotText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buyerName: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_20,
    color: COLOR.black,
  },
  date: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_16,
    color: COLOR.black,
  },
  itemName: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_14,
    color: COLOR.black,
  },
  qty: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_12,
    color: COLOR.black,
  },
  totalContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  total: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_14,
    color: "rgba(0,0,0, 0.33)",
    textAlign: "center",
  },
});
