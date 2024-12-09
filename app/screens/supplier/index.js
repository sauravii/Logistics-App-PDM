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

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard.png") : require("../../assets/images/img-base-admin-small.png");

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
    {
      id: 3,
      name: "UD. Maju Jaya",
      location: "Bandung",
      contactPerson: "+628987654321",
    },
    {
      id: 4,
      name: "CV. Sumber Rejeki",
      location: "Yogyakarta",
      contactPerson: "+6281122334455",
    },
    {
      id: 5,
      name: "PT. Cahaya Abadi",
      location: "Malang",
      contactPerson: "+6285566778899",
    },
    {
      id: 6,
      name: "PT. Cahaya Abadi",
      location: "Malang",
      contactPerson: "+6285566778899",
    },
    {
      id: 7,
      name: "PT. Cahaya Abadi",
      location: "Malang",
      contactPerson: "+6285566778899",
    },
  ];

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={{ flex: 1 }}>
        <View style={styles.contentSupp}>
          <FlatList data={supplierData} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <CardSupplier suppName={item.name} suppLoc={item.location} suppCP={item.contactPerson} />} showsVerticalScrollIndicator={false} />
        </View>

        <View>
          <Image source={imageSource} style={styles.baseImg} />
          <HeaderTitle sectionTitle={"Supplier"} onPress={() => navigation.goBack()} style={{ marginTop: -50 }} />
        </View>

        <View style={styles.btnSec}>
          <ButtonPrimary btnText={"Add"} style={{ backgroundColor: COLOR.bluePrimary }} onPress={onPressAdd} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SupplierScreen;
