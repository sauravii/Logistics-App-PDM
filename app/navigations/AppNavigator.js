import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../constants";
import { IcMenu, IcMenuFocused, IcProfile, IcProfileFocused } from "../assets/icons";
import Onboarding from "../screens/onboarding";
import LoginScreen from "../screens/login";
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";
import StockScreen from "../screens/stock";
import InputStock from "../screens/stock/input-stock";
import SupplierScreen from "../screens/supplier";
import InputSupplier from "../screens/supplier/input-supplier";
import LaporanScreen from "../screens/laporan";
import Penjualan from "../screens/penjualan";
import Pembelian from "../screens/pembelian";
import LabaScreen from "../screens/laba";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator
function TabNavigator({ route }) {
  const nameSection = route.params?.nameSection || "Guest";

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: COLOR.bluePrimary, height: 60, paddingTop: 10 },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return focused ? <IcMenuFocused width={26} /> : <IcMenu width={26} />;
          } else if (route.name === "Profile") {
            return focused ? <IcProfileFocused width={26} /> : <IcProfile width={26} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} initialParams={{ nameSection }} />
      <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ nameSection }} />
    </Tab.Navigator>
  );
}

// Stack Navigator
function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Stock" component={StockScreen} options={{ headerShown: false }} />
      <Stack.Screen name="InputStock" component={InputStock} options={{ headerShown: false }} />
      <Stack.Screen name="Supplier" component={SupplierScreen} options={{ headerShown: false }} />
      <Stack.Screen name="InputSupplier" component={InputSupplier} options={{ headerShown: false }} />
      <Stack.Screen name="Laporan" component={LaporanScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Penjualan" component={Penjualan} options={{ headerShown: false }} />
      <Stack.Screen name="Pembelian" component={Pembelian} options={{ headerShown: false }} />
      <Stack.Screen name="Laba" component={LabaScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
