import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLOR, FONTSIZE } from "../../../constants";
import { IcDelete, IcDeleteWhite, IcUpdate, IcUpdateWhite } from "../../../assets/icons";

const UpdateDelete = ({ onPressDelete, onPressUpdate }) => {
  return (
    <View>
      <TouchableOpacity style={styles.updateBox} onPress={onPressUpdate}>
        <Text style={styles.text}>Update</Text>
        <IcUpdateWhite />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteBox} onPress={onPressDelete}>
        <Text style={styles.text}>Delete</Text>
        <IcDeleteWhite />
      </TouchableOpacity>
    </View>
  );
};

export default UpdateDelete;

const styles = StyleSheet.create({
  updateBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    backgroundColor: "rgba(0,0,0,0.9)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.33)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "30%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  deleteBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    backgroundColor: "rgba(0,0,0,0.33)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.33)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "30%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  text: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_14,
    color: COLOR.white,
  },
});
