import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import styles from "./styles";
import { Image } from "react-native";
import HeaderTitle from "../../components/molecules/header-section";
import ButtonPrimary from "../../components/atomics/btn-primary";
import { COLOR } from "../../constants";
import CardSupplier from "../../components/organisms/item-supplier";
import { FlatList } from "react-native";

const SupplierScreen = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard-small.png") : require("../../assets/images/img-base-admin-small.png");

  const onPressAdd = () => {
    navigation.navigate("InputSupplier", {
      nameSection,
    });
  };

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
  ];

  return (
    <View style={styles.container}>
      <View>
        <Image source={imageSource} />
        <HeaderTitle sectionTitle={"Supplier"} onPress={() => navigation.goBack()} />
      </View>

      <View style={{ flex: 1, marginTop: 15 }}>
        <Text style={styles.listText}>Daftar Supplier</Text>
        <View style={styles.gridBox}>
          <FlatList data={supplierData} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <CardSupplier suppName={item.name} suppLoc={item.location} suppCP={item.contactPerson} />} showsVerticalScrollIndicator={false} />
        </View>
      </View>

      <View style={styles.btnSec}>
        <ButtonPrimary btnText={"Add"} style={{ backgroundColor: COLOR.bluePrimary }} onPress={onPressAdd} />
      </View>
    </View>
  );
};

export default SupplierScreen;
