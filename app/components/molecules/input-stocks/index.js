import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLOR, FONTSIZE } from "../../../constants";

const InputFieldStocks = ({ placeholder, inputName, value, onChangeText, keyboardType, hint, errorMessage }) => {
  return (
    <View>
      <Text style={styles.inputName}>{inputName}</Text>
      <TextInput placeholder={placeholder} style={[hint ? styles.inputStyleErr : styles.inputStyle]} placeholderTextColor="rgba(255, 255, 255, 0.5)" value={value} onChangeText={onChangeText} keyboardType={keyboardType} />
      {hint ? (
        <View style={styles.errorSec}>
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
    borderColor: COLOR.white,
    paddingHorizontal: 15,
    color: COLOR.white,
  },
  inputStyleErr: {
    borderWidth: 1,
    borderColor: COLOR.red,
    paddingHorizontal: 15,
    color: COLOR.white,
  },
  errorMsg: {
    fontFamily: "Inter-Regular",
    fontSize: 13,
    color: COLOR.red,
  },
});
