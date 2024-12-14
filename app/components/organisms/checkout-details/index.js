import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTSIZE } from "../../../constants";

const CheckoutDetails = ({ amountItem, itemPrice, shippingPrice, tax, sumPrice }) => {
  return (
    <View style={{ alignItems: "center", borderTopWidth: 1, borderTopColor: "rgba(0,0,0,0.1)" }}>
      <View style={styles.container}>
        <Text style={styles.type}>Subtotal ({amountItem})</Text>
        <Text style={styles.price}>Rp {itemPrice}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.type}>Biaya Pengiriman</Text>
        <Text style={styles.price}>{shippingPrice}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.type}>Pajak</Text>
        <Text style={styles.price}>Rp {tax}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.typeTotal}>Total</Text>
        <Text style={styles.price}>Rp {sumPrice}</Text>
      </View>
    </View>
  );
};

export default CheckoutDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "98%",
    // backgroundColor: "green",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  type: {
    fontFamily: "Inter-Regular",
    fontSize: 15,
  },
  price: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_16,
  },
  typeTotal: {
    fontFamily: "Inter-Medium",
    fontSize: 15,
  },
});
