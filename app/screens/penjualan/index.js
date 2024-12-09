import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import HeaderTitle from "../../components/molecules/header-section";
import { IcDotBlue } from "../../assets/icons";
import { COLOR, FONTSIZE } from "../../constants";
import PriceTag from "../../components/atomics/price-tag";
import CardPenjualan from "../../components/organisms/card-penjualan";

const Penjualan = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard.png") : require("../../assets/images/img-base-admin-small.png");

  const salesData = [
    {
      id: 1,
      buyerName: "Budi Santoso",
      date: "2024-12-01",
      itemName: "Semen",
      itemQty: 10,
      satuan: "sak",
      price: 60000,
    },
    {
      id: 2,
      buyerName: "Siti Aminah",
      date: "2024-12-02",
      itemName: "Pasir",
      itemQty: 5,
      satuan: "kubik",
      price: 500000,
    },
    {
      id: 3,
      buyerName: "Tono Prasetyo",
      date: "2024-12-03",
      itemName: "Bata Merah",
      itemQty: 100,
      satuan: "buah",
      price: 1500,
    },
    {
      id: 4,
      buyerName: "Andi Wijaya",
      date: "2024-12-04",
      itemName: "Paku",
      itemQty: 5,
      satuan: "kg",
      price: 35000,
    },
    {
      id: 5,
      buyerName: "Linda Kartika",
      date: "2024-12-05",
      itemName: "Kusen Kayu",
      itemQty: 2,
      satuan: "buah",
      price: 750000,
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
        <HeaderTitle sectionTitle={"Penjualan"} onPress={() => navigation.goBack()} />
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 22 }}>
        <FlatList
          data={salesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardPenjualan buyerName={item.buyerName} date={formatDateToIndonesian(item.date)} itemName={item.itemName} itemQty={item.itemQty} satuan={item.satuan} price={item.price} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Penjualan;
