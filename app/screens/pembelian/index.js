import { View, Text, Image, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import HeaderTitle from "../../components/molecules/header-section";
import SingleCard from "../../components/molecules/single-card";
import CardPembelian from "../../components/organisms/card-pembelian";

const Pembelian = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const [currentView, setCurrentView] = useState("default");

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard-small.png") : require("../../assets/images/img-base-admin-small.png");

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

  const supplierData = [
    {
      id: 1,
      name: "CV. Atap Rumah",
      location: "Surabaya",
      contactPerson: "+62845362182",
    },
    {
      id: 2,
      name: "PT. Bangun Sejahtera",
      location: "Jakarta",
      contactPerson: "+628123456789",
    },
    {
      id: 3,
      name: "PT. Bangun Karsa",
      location: "Jakarta",
      contactPerson: "+628123456654",
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

  const onPressSupplier = () => {
    navigation.navigate("Checkout", { nameSection: nameSection });
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={{ height: "25%" }}>
        <Image source={imageSource} style={{ width: "100%", height: "100%" }} />
        <HeaderTitle sectionTitle={currentView === "supplier" ? "Supplier" : currentView === "history" ? "History Pembelian" : "Pembelian"} onPress={() => (currentView !== "default" ? setCurrentView("default") : navigation.goBack())} />
      </View>

      {/* Main Section */}
      <View style={{ flex: 1, paddingHorizontal: 20, alignItems: "center" }}>
        {currentView === "default" && (
          <View style={{ paddingTop: 70 }}>
            <SingleCard title={"Beli Barang"} onPress={() => setCurrentView("supplier")} />
            <SingleCard title={"Lihat History Pembelian"} onPress={() => setCurrentView("history")} />
          </View>
        )}

        {currentView === "supplier" && (
          <View style={{ width: "100%", marginTop: 50 }}>
            <FlatList data={supplierData} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <SingleCard title={item.name} onPress={onPressSupplier} />} showsVerticalScrollIndicator={false} />
          </View>
        )}

        {currentView === "history" && (
          <View style={{ width: "100%", marginTop: 50 }}>
            <FlatList
              data={salesData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <CardPembelian itemName={item.itemName} date={formatDateToIndonesian(item.date)} itemQty={item.itemQty} satuan={item.satuan} price={item.price} suppName={item.supplier} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Pembelian;
