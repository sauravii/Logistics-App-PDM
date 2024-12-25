import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLOR, FONTSIZE } from "../../../constants";
import { IcWarning } from "../../../assets/icons";

const InputFieldStocks = ({ placeholder, inputName, value, onChangeText, keyboardType, hint, errorMessage, textStyle, isBlack, onPress, editable, isSelected }) => {
  return (
    <View>
      <Text style={[styles.inputName, textStyle]}>{inputName}</Text>
      {editable ? (
        <TouchableOpacity onPress={onPress} style={hint ? styles.inputStyleErrBtn : styles.inputStyleBtn}>
          <Text style={{ color: isSelected ? "white" : "rgba(255, 255, 255, 0.5)" }}>{value || placeholder}</Text>
        </TouchableOpacity>
      ) : (
        <TextInput
          placeholder={placeholder}
          style={[hint ? styles.inputStyleErr : [styles.inputStyle, { borderColor: isBlack ? COLOR.black : COLOR.white }]]}
          placeholderTextColor={isBlack ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
        />
      )}
      {hint ? (
        <View style={styles.errorSec}>
          <IcWarning />
          <Text style={styles.errorMsg}>{errorMessage}</Text>
        </View>
      ) : null}
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
    paddingHorizontal: 15,
    color: COLOR.white,
  },
  inputStyleBtn: {
    borderWidth: 1,
    paddingHorizontal: 15,
    color: COLOR.white,
    height: 40,
    justifyContent: "center",
    borderColor: "white",
  },
  inputStyleErr: {
    borderWidth: 1,
    borderColor: COLOR.red,
    paddingHorizontal: 15,
    color: COLOR.white,
  },
  inputStyleErrBtn: {
    borderWidth: 1,
    borderColor: COLOR.red,
    paddingHorizontal: 15,
    color: COLOR.white,
    height: 40,
    justifyContent: "center",
  },
  errorSec: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
    marginTop: 5,
  },
  errorMsg: {
    fontFamily: "Inter-Regular",
    fontSize: 13,
    color: COLOR.red,
  },
});
