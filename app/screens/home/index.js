import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { COLOR, FONTSIZE } from "../../constants";
import { IcAvatar, IcChevronUp, IcExpenses, IcIncome, IcOptionHorizontal, IcReport, IcStock, IcSupplier } from "../../assets/icons";
import BtnMenu from "../../components/atomics/btn-menu";
import CardLaba from "../../components/molecules/card-laba";

const HomeScreen = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard.png") : require("../../assets/images/img-base-admin-2.png");

  const onPressStock = () => {
    navigation.navigate("Stock", { nameSection });
  };

  const onPressSupplier = () => {
    navigation.navigate("Supplier", { nameSection });
  };

  const onPressLaporan = () => {
    navigation.navigate("Laporan", { nameSection });
  };

  return (
    <View style={{ backgroundColor: COLOR.white, flex: 1 }}>
      <View>
        <Image source={imageSource} />
        <View style={styles.header}>
          <View style={{ gap: 5 }}>
            <Text style={styles.hello}>Hello, {nameSection}</Text>
            <Text style={styles.greets}>Ariana Grande</Text>
          </View>
          <IcAvatar width={45} />
        </View>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.card}>
          {/* profit */}
          <View>
            <View style={styles.topProfit}>
              <View style={styles.textIcon}>
                <Text style={styles.keuntungan}>Keuntungan</Text>
                <IcChevronUp />
              </View>
              <IcOptionHorizontal />
            </View>
            <Text style={styles.amountUntung}>Rp 4.500.000</Text>
          </View>

          {/* income expenses */}
          <View style={styles.incExp}>
            <View style={styles.containerInc}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <IcIncome />
                <Text style={styles.income}>Income</Text>
              </View>
              <Text style={styles.amountInc}>Rp 3.000.000</Text>
            </View>
            <View style={{ gap: 3 }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <IcExpenses />
                <Text style={styles.income}>Expenses</Text>
              </View>
              <Text style={styles.amountInc}>Rp 1.500.000</Text>
            </View>
          </View>
        </View>

        <View style={{ gap: 15, marginTop: -35 }}>
          <BtnMenu iconRight={<IcStock />} menuText={"Stock"} onPress={onPressStock} />
          <BtnMenu iconRight={<IcReport />} menuText={"Laporan"} onPress={onPressLaporan} />
          <BtnMenu iconRight={<IcSupplier />} menuText={"Supplier"} onPress={onPressSupplier} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
