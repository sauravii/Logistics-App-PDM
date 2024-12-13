import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import HeaderTitle from "../../components/molecules/header-section";
import { Image } from "react-native";
import { COLOR, FONTSIZE } from "../../constants";
import PriceTag from "../../components/atomics/price-tag";
import PercentBBox from "../../components/atomics/percent-box";
import CardLaba from "../../components/molecules/card-laba";

const LabaScreen = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard.png") : require("../../assets/images/img-base-admin-small.png");

  return (
    <View style={styles.container}>
      <View>
        <Image source={imageSource} />
        <HeaderTitle sectionTitle={"Laba Penjualan"} onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.gridBox}>
        <CardLaba title={"Total Pembelian"} price={"500.000"} percentage={"5"} />
        <CardLaba title={"Total Penjualan"} price={"1.500.000"} percentage={"10"} />
        <CardLaba title={"Pendapatan"} price={"500.000"} percentage={"5"} />
        <CardLaba title={"Keuntungan"} price={"1.500.000"} percentage={"10"} />
      </View>

      <View style={{ backgroundColor: COLOR.bluePrimary, marginTop: 70, height: "100%" }}>
        <Text>Chart</Text>
      </View>
    </View>
  );
};

export default LabaScreen;
