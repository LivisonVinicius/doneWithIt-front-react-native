// import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Navigator from "./app/routes/homeStack";
import React from "react";

export default function App() {
  return <Navigator />;
}
