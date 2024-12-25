import { View, Text, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import React from "react";
import styles from "./styles";
import HeaderTitle from "../../components/molecules/header-section";
import { IcLine, IcPlusBlack, IcSeparator } from "../../assets/icons";
import { COLOR, FONTSIZE } from "../../constants";
import CardItemStore from "../../components/organisms/card-item-store";
import { useState } from "react";

const StoreItem = (props) => {
  const { route, navigation } = props;
  const { nameSection, suppName } = route.params;

  console.log("name", nameSection);
  console.log("supp", suppName);

  const [itemCount, setItemCount] = useState(0);
  const [isPhaseTwo, setIsPhaseTwo] = useState(false);

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard-small.png") : require("../../assets/images/img-base-admin-small.png");

  const itemsData = [
    { id: 1, itemName: "Semen", itemPrice: 75000 },
    { id: 2, itemName: "Bata (100 pcs)", itemPrice: 120000 },
    { id: 3, itemName: "Besi Beton (1 meter)", itemPrice: 45300 },
    { id: 4, itemName: "Cat (1 galon)", itemPrice: 150000 },
    { id: 5, itemName: "Papan Kayu (2 meter)", itemPrice: 85000 },
    { id: 6, itemName: "Paku (1 kg)", itemPrice: 25000 },
    { id: 7, itemName: "Kabel (gulungan)", itemPrice: 200000 },
    { id: 8, itemName: "Pasir (per ton)", itemPrice: 50000 },
  ];

  const onPressAdd = () => {
    setItemCount((prevCount) => prevCount + 1);
    setIsPhaseTwo(true);
  };

  const onPressCheckout = () => {
    if (isPhaseTwo == false) {
      Alert.alert("Belum ada barang di cart!");
    } else {
      navigation.navigate("Checkout", { nameSection: nameSection });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={imageSource} />
        <HeaderTitle sectionTitle={"Item Supplier"} onPress={() => navigation.goBack()} />
      </View>

      <View style={{ height: "78%" }}>
        <Text style={styles.suppName}>{suppName}</Text>
        <IcSeparator />

        <View style={styles.itemList}>
          <FlatList
            data={itemsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CardItemStore itemName={item.itemName} itemPrice={item.itemPrice} onPressAdd={onPressAdd} />}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.addSection}>
          <View style={{ width: "85%" }} />
          <TouchableOpacity style={styles.addCon} onPress={onPressCheckout}>
            {isPhaseTwo ? (
              <Text style={styles.itemCount}>{itemCount}</Text>
            ) : (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <IcPlusBlack />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StoreItem;
