import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../screens/home/HomeScreen";
import Onboarding from "../screens/onboarding";
import LoginScreen from "../screens/login";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Stock" component={StockScreen} options={{ headerShown: false }} />
      <Stack.Screen name="InputStock" component={InputStock} options={{ headerShown: false }} />
      <Stack.Screen name="Supplier" component={SupplierScreen} options={{ headerShown: false }} />
      <Stack.Screen name="InputSupp" component={InputSupp} options={{ headerShown: false }} />
      <Stack.Screen name="Laporan" component={LaporanScreen} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}

export default AppNavigator;
