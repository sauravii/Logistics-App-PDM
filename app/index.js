import React, { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FONTS } from "../app/constants";
import AppNavigator from "./navigations/AppNavigator";
import HomeScreen from "./screens/home/HomeScreen";
import Onboarding from "./screens/onboarding";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    async function loadFonts() {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
        "Inter-Regular": FONTS.InterRegular,
        "Inter-Medium": FONTS.InterMedium,
        "Inter-SemiBold": FONTS.InterSemiBold,
        "Inter-Bold": FONTS.InterBold,
        "Inter-ExtraBold": FONTS.InterExtraBold,
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    alignContent: "flex-start",
  },
});
