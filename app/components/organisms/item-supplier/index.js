import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLOR, FONTSIZE } from "../../../constants";
import { IcDelete, IcLogoSupplier, IcOptions, IcUpdate } from "../../../assets/icons";
import UpdateDelete from "../../molecules/update-delete";

const CardSupplier = ({ onPressOption, suppCP, suppLoc, suppName, onPress }) => {
  const [showUpdateBox, setShowUpdateBox] = useState(false);
  const [modeBox, setModeBox] = useState(false);

  const containerStyle = {
    ...styles.container,
    position: showUpdateBox ? "absolute" : "relative",
  };

  return (
    <View style={{ position: "relative" }}>
      {modeBox ? (
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
            <TouchableOpacity onPress={() => setShowUpdateBox(!showUpdateBox)}>
              <IcOptions />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ) : (
        <View>
          <View onPress={onPress}>
            <View style={[styles.container, { marginBottom: showUpdateBox ? 50 : 15 }]}>
              <View style={styles.logoText}>
                <IcLogoSupplier width={50} />
                <View>
                  <Text style={styles.suppName}>{suppName}</Text>
                  <Text style={styles.suppLoc}>{suppLoc}</Text>
                  <Text style={styles.suppCP}>Contact person: {suppCP}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setShowUpdateBox(!showUpdateBox)}>
                <IcOptions />
              </TouchableOpacity>
            </View>
          </View>
          {showUpdateBox && (
            <View style={styles.updateBox}>
              <UpdateDelete />
            </View>
          )}
        </View>
      )}
    </View>
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
    paddingLeft: 10,
    paddingRight: 18,
    paddingVertical: 5,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    borderRadius: 4,
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
  updateBox: {
    position: "absolute",
    top: 40,
    left: 195,
    width: "100%",
    // backgroundColor: "green",
  },
});
