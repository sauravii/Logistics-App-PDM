import { View, Text, TextInput, Alert, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Image } from "react-native";
import HeaderTitle from "../../../components/molecules/header-section";
import { COLOR, FONTSIZE } from "../../../constants";
import InputFieldStocks from "../../../components/molecules/input-stocks";
import ButtonPrimary from "../../../components/atomics/btn-primary";
import { IcPlusWhite } from "../../../assets/icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const InputPenjualan = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const [inputPembeli, setInputPembeli] = useState("");
  const [inputTanggalPenjualan, setInputTanggalPenjualan] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [inputListBarang, setInputListBarang] = useState([""]);
  const [inputJumlah, setInputJumlah] = useState([""]);
  const [inputSatuan, setInputSatuan] = useState([""]);

  const [showErrorMsg, setShowErrorMsg] = useState({
    pembeli: false,
    listBarang: false,
    jumlah: false,
    satuan: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    pembeli: "",
    tanggal: "",
    listBarang: "",
    jumlah: "",
    satuan: "",
  });

  const imageSource = nameSection === "Owner" ? require("../../../assets/images/img-base-admin-2.png") : require("../../../assets/images/img-base-admin-small.png");

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const addNewItem = () => {
    setInputListBarang([...inputListBarang, ""]);
    setInputJumlah([...inputJumlah, ""]);
    setInputSatuan([...inputSatuan, ""]);
  };

  const onPressSave = () => {
    let hasError = false;
    const newShowErrorMsg = { pembeli: false, tanggal: false, listBarang: false, jumlah: false, satuan: false };
    const newErrorMessage = { pembeli: "", tanggal: "", listBarang: "", jumlah: "", satuan: "" };

    if (inputPembeli.trim() === "") {
      hasError = true;
      newShowErrorMsg.pembeli = true;
      newErrorMessage.pembeli = "Nama Pembeli tidak boleh kosong.";
    }

    if (inputTanggalPenjualan.trim() === "") {
      hasError = true;
      newShowErrorMsg.tanggal = true;
      newErrorMessage.tanggal = "Tanggal Penjualan tidak boleh kosong.";
    }

    if (inputListBarang.some((item) => item.trim() === "")) {
      hasError = true;
      newShowErrorMsg.listBarang = true;
      // newErrorMessage.listBarang = "List Barang cannot contain empty items.";
    }

    if (inputJumlah.some((item) => item.trim() === "")) {
      hasError = true;
      newShowErrorMsg.jumlah = true;
      // newErrorMessage.jumlah = "Jumlah tidak boleh kosong.";
    }

    if (inputSatuan.some((item) => item.trim() === "")) {
      hasError = true;
      newShowErrorMsg.satuan = true;
      // newErrorMessage.satuan = "Satuan tidak boleh kosong.";
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

  const handleConfirmDate = (date) => {
    const formattedDate = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
    setInputTanggalPenjualan(formattedDate);
    setSelected(true);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
          <View style={styles.baseInput}>
            <View>
              <Image source={imageSource} style={{ top: -50 }} />
              <HeaderTitle sectionTitle={"Input Penjualan"} onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.inputSection}>
              <InputFieldStocks inputName={"Nama Pembeli"} placeholder={"Input here"} value={inputPembeli} onChangeText={setInputPembeli} hint={showErrorMsg.pembeli} errorMessage={errorMessage.pembeli} />

              <InputFieldStocks
                inputName={"Tanggal Penjualan"}
                placeholder={"Select a date"}
                value={inputTanggalPenjualan}
                onPress={showDatePicker}
                hint={showErrorMsg.tanggal}
                errorMessage={errorMessage.tanggal}
                isSelected={isSelected}
                editable={true}
              />

              <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirmDate} onCancel={hideDatePicker} />

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
                  errorMessage={showErrorMsg.listBarang && item.trim() === "" ? `Barang ${index + 1} tidak boleh kosong.` : ""}
                />
              ))}

              <TouchableOpacity onPress={addNewItem} style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <IcPlusWhite />
                <Text style={{ fontFamily: "Inter-Medium", fontSize: FONTSIZE.dp_14, color: COLOR.white }}>Add Items</Text>
              </TouchableOpacity>

              {inputJumlah.map((item, index) => (
                <InputFieldStocks
                  key={index}
                  keyboardType={"numeric"}
                  inputName={`Jumlah Barang ${index + 1}`}
                  placeholder={"Input here"}
                  value={item}
                  onChangeText={(text) => {
                    const updatedList = [...inputJumlah];
                    updatedList[index] = text;
                    setInputJumlah(updatedList);
                  }}
                  hint={showErrorMsg.jumlah && item.trim() === ""}
                  errorMessage={showErrorMsg.jumlah && item.trim() === "" ? `Jumlah barang ${index + 1} tidak boleh kosong.` : ""}
                />
              ))}

              {inputSatuan.map((item, index) => (
                <InputFieldStocks
                  key={index}
                  inputName={`Satuan Barang ${index + 1}`}
                  placeholder={"Input here"}
                  value={item}
                  onChangeText={(text) => {
                    const updatedList = [...inputSatuan];
                    updatedList[index] = text;
                    setInputSatuan(updatedList);
                  }}
                  hint={showErrorMsg.satuan && item.trim() === ""}
                  errorMessage={showErrorMsg.satuan && item.trim() === "" ? `Satuan barang ${index + 1} tidak boleh kosong.` : ""}
                />
              ))}
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
