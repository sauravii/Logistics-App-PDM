import { View, Text, TextInput, Alert, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Image } from "react-native";
import HeaderTitle from "../../../components/molecules/header-section";
import { COLOR, FONTSIZE } from "../../../constants";
import InputFieldStocks from "../../../components/molecules/input-stocks";
import ButtonPrimary from "../../../components/atomics/btn-primary";
import { IcPlusWhite } from "../../../assets/icons";

const InputPenjualan = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const [inputPembeli, setInputPembeli] = useState("");
  const [inputListBarang, setInputListBarang] = useState([""]);
  const [inputJumlah, setInputJumlah] = useState("");
  const [inputSatuan, setInputSatuan] = useState("");

  const [showErrorMsg, setShowErrorMsg] = useState({
    pembeli: false,
    listBarang: false,
    jumlah: false,
    satuan: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    pembeli: "",
    listBarang: "",
    jumlah: "",
    satuan: "",
  });

  const imageSource = nameSection === "Owner" ? require("../../../assets/images/img-base-admin.png") : require("../../../assets/images/img-base-admin-small.png");

  const addNewItem = () => {
    setInputListBarang([...inputListBarang, ""]);
  };

  const onPressSave = () => {
    let hasError = false;
    const newShowErrorMsg = { pembeli: false, listBarang: false, jumlah: false, satuan: false };
    const newErrorMessage = { pembeli: "", listBarang: "", jumlah: "", satuan: "" };

    if (inputPembeli.trim() === "") {
      hasError = true;
      newShowErrorMsg.pembeli = true;
      newErrorMessage.pembeli = "Nama Pembeli tidak boleh kosong.";
    }

    if (inputListBarang.some((item) => item.trim() === "")) {
      hasError = true;
      newShowErrorMsg.listBarang = true;
      newErrorMessage.listBarang = "List Barang cannot contain empty items.";
    }

    if (inputJumlah === "" || isNaN(inputJumlah) || Number(inputJumlah) <= 0) {
      hasError = true;
      newShowErrorMsg.jumlah = true;
      newErrorMessage.jumlah = "Jumlah harus lebih dari 0.";
    }

    if (inputSatuan.trim() === "") {
      hasError = true;
      newShowErrorMsg.satuan = true;
      newErrorMessage.satuan = "Satuan tidak boleh kosong.";
    }

    if (hasError) {
      setShowErrorMsg(newShowErrorMsg);
      setErrorMessage(newErrorMessage);
    } else {
      Alert.alert("Penjualan berhasil disimpan!", "", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Stock", { nameSection }),
        },
      ]);

      // Reset form
      setInputPembeli("");
      setInputListBarang([""]);
      setInputJumlah("");
      setInputSatuan("");
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
          <View style={styles.baseInput}>
            <View>
              <Image source={imageSource} />
              <HeaderTitle sectionTitle={"Input Penjualan"} onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.inputSection}>
              <InputFieldStocks inputName={"Nama Pembeli"} placeholder={"Input here"} value={inputPembeli} onChangeText={setInputPembeli} hint={showErrorMsg.pembeli} errorMessage={errorMessage.pembeli} />

              {inputListBarang.map((item, index) => (
                <InputFieldStocks
                  key={index}
                  inputName={`Barang ${index + 1}`}
                  placeholder={"Input here"}
                  value={item}
                  onChangeText={(text) => {
                    const updatedList = [...inputListBarang];
                    updatedList[index] = text;
                    setInputListBarang(updatedList);
                  }}
                  hint={showErrorMsg.listBarang && item.trim() === ""}
                  errorMessage={showErrorMsg.listBarang && item.trim() === "" ? "Barang tidak boleh kosong." : ""}
                />
              ))}

              <TouchableOpacity onPress={addNewItem} style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <IcPlusWhite />
                <Text style={{ fontFamily: "Inter-Medium", fontSize: FONTSIZE.dp_14, color: COLOR.white }}>Add Items</Text>
              </TouchableOpacity>

              <InputFieldStocks inputName={"Jumlah"} placeholder={"Input here"} value={String(inputJumlah)} onChangeText={setInputJumlah} keyboardType={"numeric"} hint={showErrorMsg.jumlah} errorMessage={errorMessage.jumlah} />

              <InputFieldStocks inputName={"Satuan"} placeholder={"Input here"} value={inputSatuan} onChangeText={setInputSatuan} hint={showErrorMsg.satuan} errorMessage={errorMessage.satuan} />
            </View>
          </View>
        </ScrollView>
        <View style={styles.fixedButton}>
          <ButtonPrimary style={styles.btnSave} btnText={"Save"} onPress={onPressSave} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default InputPenjualan;
