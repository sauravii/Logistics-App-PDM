import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { COLOR, FONTSIZE } from "../../constants";
import { IcAvatar, IcReport, IcStock, IcSupplier } from "../../assets/icons";
import BtnMenu from "../../components/atomics/btn-menu";

const HomeScreen = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  return (
    <View>
      <View>
        <Image source={require("../../assets/images/img-base-onboard.png")} />
        <View style={styles.header}>
          <View style={{ gap: 5 }}>
            <Text style={styles.hello}>Hello, {nameSection}</Text>
            <Text style={styles.greets}>Ariana Grande</Text>
          </View>
          <IcAvatar width={45} />
        </View>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.card}>
          <Text>Card</Text>
        </View>

        <View style={{ gap: 15, marginTop: -35 }}>
          <BtnMenu iconRight={<IcStock />} menuText={"Stock"} />
          <BtnMenu iconRight={<IcReport />} menuText={"Laporan"} />
          <BtnMenu iconRight={<IcSupplier />} menuText={"Supplier"} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
