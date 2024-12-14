import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IcChevronDown, IcChevronRight } from "../../../assets/icons";
import { COLOR, FONTSIZE } from "../../../constants";
import CardBank from "../../atomics/card-bank";

const MenuCheckout = ({ menuTitle, menuDesc, isExpanded, onPress, children }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.menuTitle}>{menuTitle}</Text>
        <Text
          style={[
            styles.menuDesc,
            {
              fontFamily: "Inter-Regular",
              fontSize: 14,
            },
          ]}
        >
          {menuDesc}
        </Text>
        <TouchableOpacity onPress={onPress}>{isExpanded ? <IcChevronDown width={18} /> : <IcChevronRight />}</TouchableOpacity>
      </View>
      {isExpanded && children}
    </View>
  );
};

export default MenuCheckout;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.3)",
    paddingVertical: 15,
  },
  menuTitle: {
    fontFamily: "Inter-Medium",
    fontSize: 15,
    color: COLOR.black,
    width: "33%",
  },
  menuDesc: {
    color: COLOR.black,
    width: "62%",
  },
});
