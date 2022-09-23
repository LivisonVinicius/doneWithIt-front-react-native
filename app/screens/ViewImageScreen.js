import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/Ionicons";

function ViewImageScreen({ navigation }) {
  const image = navigation.getParam("image");
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="close-circle" size={40} color={colors.white} />
      </TouchableOpacity>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: image }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    left: 30,
    top: 30,
    zIndex: 2,
  },
});

export default ViewImageScreen;
