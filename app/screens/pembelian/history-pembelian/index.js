import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import CardPembelian from "../../../components/organisms/card-pembelian";
import HeaderTitle from "../../../components/molecules/header-section";
import styles from "./styles";

const HistoryPembelian = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const imageSource = nameSection === "Owner" ? require("../../../assets/images/img-base-onboard-small.png") : require("../../../assets/images/img-base-admin-small.png");

  const salesData = [
    {
      id: 1,
      itemName: "Semen",
      itemQty: 10,
      satuan: "sak",
      price: 60000,
      supplier: "CV. Atap Rumah",
      date: "2024-12-01",
    },
    {
      id: 2,
      itemName: "Pasir",
      itemQty: 5,
      satuan: "kubik",
      price: 500000,
      supplier: "PT. Bangun Sejahtera",
      date: "2024-12-05",
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
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CardPembelian itemName={item.itemName} date={formatDateToIndonesian(item.date)} itemQty={item.itemQty} satuan={item.satuan} price={item.price} suppName={item.supplier} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HistoryPembelian;
