// import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Navigator from "./app/routes/homeStack";
import React from "react";
import { Viga_400Regular } from "@expo-google-fonts/viga";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Viga_400Regular,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigator />;
}
