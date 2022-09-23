import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
} from "react-native";
import colors from "../config/colors";
import IconF from "react-native-vector-icons/FontAwesome5";
import IconE from "react-native-vector-icons/Entypo";

function RegisterScreen({ navigation }) {
  const pressBackHandler = () => {
    navigation.goBack();
  };
  const pressHandler = () => {
    navigation.navigate("Welcome");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.backButton} onPress={pressBackHandler}>
        <IconF name="arrow-left" size={30} />
      </TouchableHighlight>
      <IconE
        name="user"
        style={[styles.icon, { top: 330 }]}
        size={20}
        color={colors.gray}
      />
      <IconE
        name="mail"
        style={[styles.icon, { top: 390 }]}
        size={20}
        color={colors.gray}
      />
      <IconE
        name="lock"
        style={[styles.icon, { top: 450 }]}
        size={20}
        color={colors.gray}
      />
      <Image
        style={styles.logo}
        source={require("../assets/DWI_logo_black.png")}
      />
      <TextInput
        style={styles.input}
        editable
        numberOfLines={1}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        editable
        numberOfLines={1}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        editable
        numberOfLines={1}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <TouchableOpacity style={styles.loginButton} onPress={pressHandler}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.yellow,
  },
  logo: {
    width: 230,
    height: 230,
    borderRadius: 120,
    marginTop: 70,
  },
  backButton: {
    position: "absolute",
    left: 30,
    top: 30,
  },
  input: {
    width: "90%",
    height: 40,
    backgroundColor: colors.lightgray,
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 40,
  },
  icon: {
    color: colors.gray,
    position: "absolute",
    left: 30,
    zIndex: 2,
  },
  loginButton: {
    width: "90%",
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 23,
    fontFamily: "Montserrat_600SemiBold",
    color: colors.white,
  },
});

export default RegisterScreen;
