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

  const [inputSuppName, setInputSuppName] = useState("");
  const [inputSuppLoc, setInputSuppLoc] = useState("");
  const [inputSuppCP, setInputSuppCP] = useState("");

  const [showErrorMsg, setShowErrorMsg] = useState({
    supplier: false,
    lokasi: false,
    CP: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    supplier: "",
    lokasi: "",
    CP: "",
  });

  const imageSource = nameSection === "Owner" ? require("../../../assets/images/img-base-admin.png") : require("../../../assets/images/img-base-admin-small.png");

  const onPressSave = () => {
    let hasError = false;
    const newShowErrorMsg = { supplier: false, lokasi: false, CP: false };
    const newErrorMessage = { supplier: "", lokasi: "", CP: "" };

    if (inputSuppName === "") {
      hasError = true;
      newShowErrorMsg.supplier = true;
      newErrorMessage.supplier = "Nama supplier cannot be empty.";
    }

    if (inputSuppLoc === "") {
      hasError = true;
      newShowErrorMsg.lokasi = true;
      newErrorMessage.lokasi = "Lokasi cannot be empty.";
    }

    if (inputSuppCP === "") {
      hasError = true;
      newShowErrorMsg.CP = true;
      newErrorMessage.CP = "Contact Person cannot be empty.";
    }

    if (hasError) {
      setShowErrorMsg(newShowErrorMsg);
      setErrorMessage(newErrorMessage);
    } else {
      Alert.alert("Supplier berhasil ditambahkan!", "", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Supplier", { nameSection }),
        },
      ]);
      setInputSuppName("");
      setInputSuppLoc("");
      setInputSuppCP("");

      console.log("supp", inputSuppName);
      console.log("loc", inputSuppLoc);
      console.log("cp", inputSuppCP);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.baseInput}>
          <View>
            <Image source={imageSource} />
            <HeaderTitle sectionTitle={"Input Supplier"} onPress={() => navigation.goBack()} />
          </View>

          <View style={styles.inputSection}>
            <InputFieldStocks inputName={"Nama Supplier"} placeholder={"Input here"} value={inputSuppName} onChangeText={setInputSuppName} hint={showErrorMsg.supplier} errorMessage={errorMessage.supplier} />
            <InputFieldStocks inputName={"Lokasi"} placeholder={"Input here"} value={inputSuppLoc} onChangeText={setInputSuppLoc} hint={showErrorMsg.lokasi} errorMessage={errorMessage.lokasi} />
            <InputFieldStocks inputName={"Contact Person"} placeholder={"Input here"} value={inputSuppCP} onChangeText={setInputSuppCP} hint={showErrorMsg.CP} errorMessage={errorMessage.CP} keyboardType={"numeric"} />
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
