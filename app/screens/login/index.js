import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { IcEyesClose, IcLock, IcUser } from "../../assets/icons";
import { COLOR, FONTSIZE } from "../../constants";
import InputField from "../../components/molecules/input-field";
import ButtonPrimary from "../../components/atomics/btn-primary";

const LoginScreen = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ username: "", password: "" });

  const users = {
    Admin: { username: "admin", password: "admin123" },
    Owner: { username: "owner", password: "owner123" },
  };

  const handleLogin = () => {
    console.log("role", nameSection);
    console.log("usn", username);
    console.log("pwd", password);

    setShowError(false);
    setErrorMessage({ username: "", password: "" });

    if (username === "" || password === "") {
      setShowError(true);
      setErrorMessage({
        username: username === "" ? "Username tidak boleh kosong." : "",
        password: password === "" ? "Password tidak boleh kosong." : "",
      });
      return;
    }

    const user = users[nameSection];

    if (!user) {
      setShowError(true);
      setErrorMessage({ username: "", password: "Role not found or invalid." });
      return;
    }

    if (username !== user.username && password !== user.password) {
      setShowError(true);
      setErrorMessage({
        username: "Oops! Username salah. Coba lagi!",
        password: "Oops! Password salah. Coba lagi!",
      });
    } else if (username !== user.username) {
      setShowError(true);
      setErrorMessage({
        username: "Oops! Username salah. Coba lagi!",
        password: "",
      });
    } else if (password !== user.password) {
      setShowError(true);
      setErrorMessage({
        username: "",
        password: "Oops! Password salah. Coba lagi!",
      });
    } else {
      Alert.alert("Login Berhasil", `Selamat datang, ${nameSection}!`);
      navigation.navigate("Home", {
        nameSection,
      });
    }
  };

  return (
    <View style={{ backgroundColor: COLOR.white, flex: 1 }}>
      <View>
        <Image source={require("../../assets/images/img-base-onboard.png")} />
        <Text style={styles.greets}>Hey, {nameSection}!</Text>
      </View>

      <View style={styles.content}>
        <View>
          {/* username */}
          <InputField iconRight={<IcUser />} placeholder={"USERNAME"} value={username} onChangeText={setUsername} hint={showError && errorMessage.username !== ""} errorMessage={errorMessage.username} />
          {/* password */}
          <InputField iconRight={<IcLock />} placeholder={"PASSWORD"} secureTextEntry={true} value={password} onChangeText={setPassword} hint={showError && errorMessage.password !== ""} errorMessage={errorMessage.password} />
        </View>

        <Text style={styles.desc}>Please, input your username and password</Text>

        <ButtonPrimary btnText={"Log in"} onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
