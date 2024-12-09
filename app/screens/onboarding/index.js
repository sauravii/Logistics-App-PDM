import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { COLOR, FONTSIZE } from "../../constants";
import { ButtonSecondary } from "../../components";

const Onboarding = (props) => {
  const { route, navigation } = props;

  const onLoginOwner = () => {
    navigation.navigate("Login", {
      nameSection: "Owner",
    });
  };

  const onLoginAdmin = () => {
    navigation.navigate("Login", {
      nameSection: "Admin",
    });
  };

  return (
    <View style={{ backgroundColor: COLOR.white, flex: 1 }}>
      <View>
        <Image source={require("../../assets/images/img-base-onboard.png")} />
        <Text style={styles.greets}>Hey, There!</Text>
      </View>

      <View style={{ alignItems: "center", paddingHorizontal: 60, marginTop: 15 }}>
        <Image source={require("../../assets/images/img-user-onboard.png")} />
        <Text style={styles.welcome}>Welcome</Text>

        <TouchableOpacity style={styles.btnStyle} onPress={onLoginOwner}>
          <Text style={styles.btnText}>Owner</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnStyle} onPress={onLoginAdmin}>
          <Text style={styles.btnText}>Admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
