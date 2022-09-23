import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import IconF from "react-native-vector-icons/FontAwesome5";

export default function ProductScreen({ navigation }) {
  const pressBackHandler = () => {
    navigation.goBack();
  };
  const image = navigation.getParam("image");
  const name = navigation.getParam("name");
  const price = navigation.getParam("price");
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={pressBackHandler}>
        <IconF name="arrow-left" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.photo}
        onPress={() => navigation.navigate("ViewImage", { image: image })}
      >
        <Image style={styles.photo} source={{ uri: image }} />
      </TouchableOpacity>
      <View style={styles.description}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  photo: {
    width: "100%",
    height: 200,
  },
  backButton: {
    position: "absolute",
    left: 30,
    top: 30,
    zIndex: 2,
  },
  description: {
    width: "100%",
    height: 150,
    flex: 1,
    alignItems: "flex-start",
  },
  name: {
    marginLeft: 15,
    marginTop: 7,
    fontSize: 20,
    fontFamily: "Viga_400Regular",
  },
  price: {
    marginLeft: 15,
    fontSize: 25,
    fontFamily: "Viga_400Regular",
    color: colors.primary,
  },
});
