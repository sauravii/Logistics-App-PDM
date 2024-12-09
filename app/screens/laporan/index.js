import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Image } from "react-native";
import HeaderTitle from "../../components/molecules/header-section";
import BtnMenu from "../../components/atomics/btn-menu";
import { IcLaba, IcPembelian, IcStock } from "../../assets/icons";

const LaporanScreen = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard.png") : require("../../assets/images/img-base-admin-small.png");

  const onPressPenjualan = () => {
    navigation.navigate("Penjualan", { nameSection });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={imageSource} />
        <HeaderTitle sectionTitle={"Laporan"} onPress={() => navigation.goBack()} />
      </View>

      <View style={{ gap: 15, paddingHorizontal: 20, marginTop: 80 }}>
        <BtnMenu iconRight={<IcStock />} menuText={"Penjualan"} onPress={onPressPenjualan} />
        <BtnMenu iconRight={<IcPembelian />} menuText={"Pembelian"} />
        <BtnMenu iconRight={<IcLaba />} menuText={"Laba"} />
      </View>
    </View>
  );
};

export default LaporanScreen;
