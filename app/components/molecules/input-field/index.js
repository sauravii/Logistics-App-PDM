import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FONTSIZE, COLOR } from "../../../constants";
import { IcEyesClose, IcEyesOpen, IcWarning } from "../../../assets/icons";

const InputField = ({ placeholder, iconRight, onChangeText, secureTextEntry, value, errorMessage, hint }) => {
  const [secure, setSecure] = useState(secureTextEntry);

  return (
    <View style={{ width: "100%" }}>
      <View style={[styles.wrapper, hint && { borderColor: COLOR.red }]}>
        {iconRight && <View style={styles.iconWrapper}>{iconRight}</View>}
        <TextInput placeholder={placeholder} style={styles.inputStyle} onChangeText={onChangeText} secureTextEntry={secure} value={value} />
        {secureTextEntry && <TouchableOpacity onPress={() => setSecure(!secure)}>{secure ? <IcEyesClose /> : <IcEyesOpen />}</TouchableOpacity>}
      </View>
      {hint ? (
        <View style={styles.errorSec}>
          <IcWarning />
          <Text style={styles.errorMsg}>{errorMessage}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLOR.black,
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    height: 50,
    marginVertical: 12,
    // backgroundColor: hint ? COLOR.red : null,
  },
  inputStyle: {
    flex: 1,
    fontSize: FONTSIZE.dp_14,
    color: COLOR.black,
  },
  iconWrapper: {
    marginRight: 10,
  },
  errorSec: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
  errorMsg: {
    fontFamily: "Inter-SemiBold",
    fontSize: 13,
    color: COLOR.red,
  },
});
