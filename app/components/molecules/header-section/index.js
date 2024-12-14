import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IcChevronLeft } from "../../../assets/icons";
import { COLOR, FONTSIZE } from "../../../constants";

const HeaderTitle = ({ onPress, sectionTitle }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
        <IcChevronLeft />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{sectionTitle}</Text>
      </View>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    position: "absolute",
    marginTop: 40,
    paddingLeft: 20,
    width: "100%",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "green",
    marginRight: 50,
  },
  title: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_30,
    color: COLOR.white,
    textAlign: "center",
  },
});
