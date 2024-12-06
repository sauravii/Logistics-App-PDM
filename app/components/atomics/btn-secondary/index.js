import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS, COLOR, FONTSIZE } from "../../../constants";

const ButtonSecondary = () => {
  return (
    <View>
      <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.btnText}>Owner</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSecondary;

const styles = StyleSheet.create({
  btnStyle: { backgroundColor: COLOR.blueGradient, paddingVertical: 25, paddingHorizontal: 28, borderRadius: 5, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%" },
  btnText: { fontFamily: "Inter-SemiBold", fontSize: FONTSIZE.dp_24, color: COLOR.white },
});
