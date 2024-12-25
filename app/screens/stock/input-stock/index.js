import { View, Text, TextInput, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Image } from "react-native";
import HeaderTitle from "../../../components/molecules/header-section";
import { COLOR, FONTSIZE } from "../../../constants";
import InputFieldStocks from "../../../components/molecules/input-stocks";
import ButtonPrimary from "../../../components/atomics/btn-primary";

const InputStock = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const [inputBarang, setInputBarang] = useState("");
  const [inputStock, setInputStock] = useState("");
  const [inputSatuan, setInputSatuan] = useState("");

  const [showErrorMsg, setShowErrorMsg] = useState({
    barang: false,
    stock: false,
    satuan: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    barang: "",
    stock: "",
    satuan: "",
  });

  const imageSource = nameSection === "Owner" ? require("../../../assets/images/img-base-admin-small.png") : require("../../../assets/images/img-base-admin-small.png");

  const onPressSave = () => {
    let hasError = false;
    const newShowErrorMsg = { barang: false, stock: false, satuan: false };
    const newErrorMessage = { barang: "", stock: "", satuan: "" };

    if (inputBarang === "") {
      hasError = true;
      newShowErrorMsg.barang = true;
      newErrorMessage.barang = "Nama Barang tidak boleh kosong.";
    }

    if (inputStock === "") {
      hasError = true;
      newShowErrorMsg.stock = true;
      newErrorMessage.stock = "Stock tidak boleh kosong.";
    }

    if (inputSatuan === "") {
      hasError = true;
      newShowErrorMsg.satuan = true;
      newErrorMessage.satuan = "Satuan tidak boleh kosong.";
    }

    if (hasError) {
      setShowErrorMsg(newShowErrorMsg);
      setErrorMessage(newErrorMessage);
    } else {
      Alert.alert("Barang berhasil ditambahkan!", "", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Stock", { nameSection }),
        },
      ]);
      setInputBarang("");
      setInputStock("");
      setInputSatuan("");
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.baseInput}>
          <View>
            <Image source={imageSource} />
            <HeaderTitle sectionTitle={"Input Stock"} onPress={() => navigation.goBack()} />
          </View>

          <View style={styles.inputSection}>
            <InputFieldStocks inputName={"Nama Barang"} placeholder={"Input here"} value={inputBarang} onChangeText={setInputBarang} hint={showErrorMsg.barang} errorMessage={errorMessage.barang} />
            <InputFieldStocks inputName={"Stock"} placeholder={"Input here"} value={inputStock} onChangeText={setInputStock} keyboardType={"numeric"} hint={showErrorMsg.stock} errorMessage={errorMessage.stock} />
            <InputFieldStocks inputName={"Satuan"} placeholder={"Input here"} value={inputSatuan} onChangeText={setInputSatuan} hint={showErrorMsg.satuan} errorMessage={errorMessage.satuan} />
          </View>
        </View>

        {/* btn */}
        <View style={{ paddingHorizontal: 30 }}>
          <ButtonPrimary style={styles.btnSave} btnText={"Save"} onPress={onPressSave} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InputStock;
