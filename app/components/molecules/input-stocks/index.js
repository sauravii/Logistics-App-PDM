import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLOR, FONTSIZE } from "../../../constants";

const InputFieldStocks = ({ placeholder, inputName, value, onChangeText, keyboardType }) => {
  return (
    <View>
      <Text style={styles.inputName}>{inputName}</Text>
      <TextInput placeholder={placeholder} style={styles.inputStyle} placeholderTextColor="rgba(255, 255, 255, 0.5)" value={value} onChangeText={onChangeText} keyboardType={keyboardType} />
    </View>
  );
};

export default InputFieldStocks;

const styles = StyleSheet.create({
  inputName: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_20,
    color: COLOR.white,
    marginBottom: 5,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: COLOR.white,
    paddingHorizontal: 15,
    color: COLOR.white,
  },
});
