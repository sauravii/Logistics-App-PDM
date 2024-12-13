import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import HeaderTitle from "../../components/molecules/header-section";
import { FlatList } from "react-native";
import CardPembelian from "../../components/organisms/card-pembelian";
import PriceTag from "../../components/atomics/price-tag";
import { FONTSIZE } from "../../constants";

const Pembelian = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard-small.png") : require("../../assets/images/img-base-admin-small.png");

  const salesData = [
    {
      id: 1,
      itemName: "Semen",
      itemQty: 10,
      satuan: "sak",
      price: 60000,
      supplier: "CV. Atap Rumah",
    },
    {
      id: 2,
      itemName: "Pasir",
      itemQty: 5,
      satuan: "kubik",
      price: 500000,
      supplier: "PT. Bangun Sejahtera",
    },
  ];

  const formatDateToIndonesian = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={imageSource} />
        <HeaderTitle sectionTitle={"Pembelian"} onPress={() => navigation.goBack()} />
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 22 }}>
        <FlatList
          data={salesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardPembelian itemName={item.itemName} date={formatDateToIndonesian(item.date)} itemQty={item.itemQty} satuan={item.satuan} price={item.price} suppName={item.supplier} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Pembelian;
