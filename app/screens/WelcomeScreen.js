import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Login");
  };
  const registerPressHandler = () => {
    navigation.navigate("Register");
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/DWI_logo_transparent.png")}
        />
        <Text style={styles.logoText}>sell what you don't need</Text>
      </View>
      <TouchableHighlight style={styles.loginButton} onPress={pressHandler}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.registerButton}
        onPress={registerPressHandler}
      >
        <Text style={styles.loginText}>New here? Register</Text>
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "90%",
    height: 70,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 37,
  },
  loginText: {
    fontSize: 23,
    fontWeight: "bold",
  },
  registerButton: {
    width: "90%",
    height: 70,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 37,
    marginVertical: 10,
  },
  logo: {
    width: 230,
    height: 230,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default WelcomeScreen;
