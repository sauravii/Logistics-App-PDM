import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import HeaderTitle from "../../components/molecules/header-section";
import { IcBCA, IcBNI, IcBRI, IcChevronRight, IcDanamon, IcMandiri, IcPlusBlue, IcSuccess } from "../../assets/icons";
import { COLOR, FONTSIZE } from "../../constants";
import MenuCheckout from "../../components/molecules/menu-checkout";
import CardBank from "../../components/atomics/card-bank";
import CheckoutDetails from "../../components/organisms/checkout-details";
import ButtonPrimary from "../../components/atomics/btn-primary";
import ListBarang from "../../components/organisms/list-barang";

const CheckoutScreen = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const [currentView, setCurrentView] = useState("default");

  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedBank, setSelectedBank] = useState(null);

  const [showButton, setShowButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard-small.png") : require("../../assets/images/img-base-admin-small.png");

  const itemsData = [
    {
      id: 1,
      itemName: "Paku Beton 5 cm",
      itemPrice: 50000,
      itemQty: 150,
      itemSatuan: "box",
      itemSumPrice: "1.500.000",
    },
    {
      id: 2,
      itemName: "Paku Payung Jamur",
      itemPrice: 10000,
      itemQty: 100,
      itemSatuan: "box",
      itemSumPrice: "1.000.000",
    },
    {
      id: 3,
      itemName: "Paku Tembak 3 cm",
      itemPrice: 25000,
      itemQty: 200,
      itemSatuan: "box",
      itemSumPrice: "5.000.000",
    },
  ];

  const totalItems = itemsData.length;
  const subtotal = itemsData.reduce((total, item) => total + item.itemPrice * item.itemQty, 0);
  const tax = 10000;
  const shippingPrice = 0;
  const totalPrice = subtotal + tax + shippingPrice;

  const handleSelectBank = (bank) => {
    setSelectedBank(bank);
    setActiveMenu(null);
  };

  const onPressOrder = () => {
    setIsLoading(true);
    setCurrentView("success");
    setShowButton(false);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <View style={{ height: "25%" }}>
        <Image source={imageSource} style={styles.imgTop} />
        <HeaderTitle sectionTitle={currentView === "default" ? "Checkout" : "Payment"} onPress={() => (currentView !== "default" ? setCurrentView("default") : navigation.goBack())} />
      </View>

      {currentView === "default" && (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: -35 }}>
          <View>
            <MenuCheckout menuTitle="ALAMAT" menuDesc="Sawoan, Sawo, Kutorejo, Mojokerto Regency" isExpanded={activeMenu === "ALAMAT"} onPress={() => setActiveMenu(activeMenu === "ALAMAT" ? null : "ALAMAT")}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "31%" }} />
                <TouchableOpacity style={styles.addAddress}>
                  <IcPlusBlue />
                  <Text style={styles.address}>Tambah Alamat</Text>
                </TouchableOpacity>
              </View>
            </MenuCheckout>

            <MenuCheckout menuTitle="PENGIRIMAN" menuDesc="Gratis Standar | 3 - 4 Hari" isExpanded={activeMenu === "PENGIRIMAN"} onPress={() => setActiveMenu(activeMenu === "PENGIRIMAN" ? null : "PENGIRIMAN")}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "35%" }} />
                <TouchableOpacity style={{ marginTop: 8 }}>
                  <Text style={styles.address}>Paket Hemat | 6 - 7 Hari</Text>
                </TouchableOpacity>
              </View>
            </MenuCheckout>

            <MenuCheckout
              menuTitle="PEMBAYARAN"
              menuDesc={selectedBank ? <CardBank iconBank={selectedBank.icon} bankName={selectedBank.name} bankNumber={selectedBank.number} /> : "Pilih Bank"}
              isExpanded={activeMenu === "PEMBAYARAN"}
              onPress={() => setActiveMenu(activeMenu === "PEMBAYARAN" ? null : "PEMBAYARAN")}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "34%" }} />
                <View style={{ gap: 6, marginTop: 10 }}>
                  <TouchableOpacity onPress={() => handleSelectBank({ name: "Bank Central Asia", number: "8299102783", icon: <IcBCA /> })}>
                    <CardBank iconBank={<IcBCA />} bankName="Bank Central Asia" bankNumber="8299102783" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSelectBank({ name: "Bank Mandiri", number: "0123456789", icon: <IcMandiri /> })}>
                    <CardBank iconBank={<IcMandiri />} bankName="Bank Mandiri" bankNumber="0123456789" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSelectBank({ name: "Bank Danamon", number: "1234567890", icon: <IcDanamon /> })}>
                    <CardBank iconBank={<IcDanamon />} bankName="Bank Danamon" bankNumber="1234567890" />
                  </TouchableOpacity>
                </View>
              </View>
            </MenuCheckout>

            <MenuCheckout menuTitle={"BARANG"} menuDesc={"DESKRIPSI"} isPhaseTwo={true} />
            {itemsData.map((item) => (
              <ListBarang key={item.id} itemName={item.itemName} itemPrice={item.itemPrice} itemQty={item.itemQty} itemSatuan={item.itemSatuan} itemSumPrice={(item.itemPrice * item.itemQty).toLocaleString("id-ID")} isPhaseTwo={true} />
            ))}
            <View style={{ marginBottom: 100 }}>
              <CheckoutDetails
                amountItem={totalItems.toString()}
                itemPrice={subtotal.toLocaleString("id-ID")}
                shippingPrice={shippingPrice === 0 ? "Free" : shippingPrice.toLocaleString("id-ID")}
                tax={tax.toLocaleString("id-ID")}
                sumPrice={totalPrice.toLocaleString("id-ID")}
              />
            </View>
          </View>
        </ScrollView>
      )}

      {currentView === "success" && (
        <View style={styles.successCon}>
          <IcSuccess />
          <View style={{ marginHorizontal: 30 }}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.successText}>Pembayaran Berhasil!</Text>
              <Text style={styles.successDesc}>Pembayaran Anda telah dikonfirmasi. Pesanan Anda sedang diproses</Text>
            </View>
            <TouchableOpacity style={styles.btnOK} onPress={() => navigation.navigate("Home", { nameSection })}>
              <Text style={styles.btnText}>Oke</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {showButton ? <View style={styles.fixedButton}>{isLoading ? <ActivityIndicator color={COLOR.white} size={"50"} /> : <ButtonPrimary style={styles.btnSave} btnText={"Place Order"} onPress={onPressOrder} />}</View> : null}
    </View>
  );
};

export default CheckoutScreen;
