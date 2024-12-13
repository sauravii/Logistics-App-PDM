import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IcChevronRight, IcNotification } from "../../../assets/icons";
import { FONTSIZE } from "../../../constants";

const SubMenu = ({ leftIcon, titleMenu }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconText}>
        {leftIcon}
        <Text style={styles.title}>{titleMenu}</Text>
      </View>
      <TouchableOpacity>
        <IcChevronRight />
      </TouchableOpacity>
    </View>
  );
};

export default SubMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "99%",
  },
  iconText: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontFamily: "Inter-Regular",
    fontSize: 15,
  },
});
