import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLOR, FONTSIZE } from "../../../constants";
import { IcDelete, IcLogoSupplier, IcOptions, IcUpdate } from "../../../assets/icons";

const CardSupplier = ({ onPressOption, suppCP, suppLoc, suppName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.logoText}>
          <IcLogoSupplier width={50} />
          <View>
            <Text style={styles.suppName}>{suppName}</Text>
            <Text style={styles.suppLoc}>{suppLoc}</Text>
            <Text style={styles.suppCP}>Contact person: {suppCP}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onPressOption}>
          <IcOptions />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CardSupplier;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
  },
  logoText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  suppName: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_16,
    color: COLOR.black,
  },
  suppLoc: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_14,
    color: COLOR.black,
  },
  suppCP: {
    fontFamily: "Inter-Medium",
    fontSize: 13,
    color: COLOR.black,
  },
});
