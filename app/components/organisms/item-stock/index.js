import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { IcDot, IcOptions } from "../../../assets/icons";
import { FONTS, FONTSIZE, COLOR } from "../../../constants";
import UpdateDelete from "../../molecules/update-delete";

const ItemStock = ({ itemName, itemStock, onPressOptions, itemSatuan }) => {
  const [showUpdateBox, setShowUpdateBox] = useState(false);

  return (
    <View>
      <View style={[styles.container, { marginBottom: showUpdateBox ? 60 : 15 }]}>
        <View style={styles.itemDot}>
          <IcDot />
          <View>
            <Text style={styles.itemName}>{itemName}</Text>
            <Text style={styles.itemStock}>
              Stock : {itemStock} {itemSatuan}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setShowUpdateBox(!showUpdateBox)}>
          <IcOptions />
        </TouchableOpacity>
      </View>
      {showUpdateBox && (
        <View style={styles.updateBox}>
          <UpdateDelete />
        </View>
      )}
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
  updateBox: {
    position: "absolute",
    top: 40,
    left: 195,
    width: "100%",
    // backgroundColor: "green",
  },
});
