import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { COLOR, FONTSIZE } from "../../constants";
import styles from "./styles";
import ItemStock from "../../components/organisms/item-stock";
import HeaderTitle from "../../components/molecules/header-section";
import ButtonPrimary from "../../components/atomics/btn-primary";
import { IcDelete, IcLine, IcUpdate } from "../../assets/icons";

const StockScreen = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard-small.png") : require("../../assets/images/img-base-admin-small.png");

  const stockData = [
    { id: "1", itemName: "Paku", itemStock: "5", itemSatuan: "Box" },
    { id: "2", itemName: "Cat", itemStock: "10", itemSatuan: "Kaleng" },
    { id: "3", itemName: "Kuas", itemStock: "20", itemSatuan: "Pcs" },
    { id: "4", itemName: "Plywood", itemStock: "15", itemSatuan: "Lembar" },
    { id: "5", itemName: "Plywood", itemStock: "15", itemSatuan: "Lembar" },
    { id: "6", itemName: "Plywood", itemStock: "15", itemSatuan: "Lembar" },
  ];

  const onPressAdd = () => {
    navigation.navigate("InputStock", { nameSection });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={imageSource} />
        <HeaderTitle sectionTitle={"Stock"} onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.listSec}>
        <Text style={styles.listText}>Daftar Stock</Text>
      </View>

      <FlatList
        data={stockData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 30, paddingBottom: 100 }}
        renderItem={({ item }) => <ItemStock itemName={item.itemName} itemStock={item.itemStock} itemSatuan={item.itemSatuan} />}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.btnSec}>
        <ButtonPrimary btnText={"Add"} style={{ backgroundColor: COLOR.bluePrimary }} onPress={onPressAdd} />
      </View>
    </View>
  );
};

export default StockScreen;
