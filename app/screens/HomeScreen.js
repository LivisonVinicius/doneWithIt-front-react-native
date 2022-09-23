import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../config/colors";

export default function HomeScreen({ navigation }) {
  const [sellings, setSellings] = useState([
    {
      name: "Cadeira bonita",
      price: "100,00 R$",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Mesa bonita",
      price: "120,00 R$",
      image:
        "https://www.vidaloucadecasada.com.br/wp-content/uploads/2017/07/Minha-mesa-jantar-estilo-industrial1.jpg.webp",
    },
    {
      name: "Casaco Velho",
      price: "60,00 R$",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_963492-MLB42361018501_062020-O.jpg",
    },
    {
      name: "Cadeira bonita",
      price: "100,00 R$",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Mesa bonita",
      price: "120,00 R$",
      image:
        "https://www.vidaloucadecasada.com.br/wp-content/uploads/2017/07/Minha-mesa-jantar-estilo-industrial1.jpg.webp",
    },
    {
      name: "Casaco Velho",
      price: "60,00 R$",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_963492-MLB42361018501_062020-O.jpg",
    },
    {
      name: "Cadeira bonita",
      price: "100,00 R$",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Mesa bonita",
      price: "120,00 R$",
      image:
        "https://www.vidaloucadecasada.com.br/wp-content/uploads/2017/07/Minha-mesa-jantar-estilo-industrial1.jpg.webp",
    },
    {
      name: "Casaco Velho",
      price: "60,00 R$",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_963492-MLB42361018501_062020-O.jpg",
    },
    {
      name: "Cadeira bonita",
      price: "100,00 R$",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Mesa bonita",
      price: "120,00 R$",
      image:
        "https://www.vidaloucadecasada.com.br/wp-content/uploads/2017/07/Minha-mesa-jantar-estilo-industrial1.jpg.webp",
    },
    {
      name: "Casaco Velho",
      price: "60,00 R$",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_963492-MLB42361018501_062020-O.jpg",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/DWI_logo_black.png")}
      />
      <FlatList
        style={styles.photoContainer}
        data={sellings}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Product", item)}
          >
            <Image style={styles.productPhoto} source={{ uri: item.image }} />
            <View style={styles.descriptionBox}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.yellow,
  },
  productPhoto: {
    width: 350,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 25,
    margin: 10,
    position: "absolute",
    left: -10,
    width: "100%",
    paddingLeft: 15,
  },
  photoContainer: {
    marginTop: 75,
  },
  logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: -60,
  },
  descriptionBox: {
    backgroundColor: colors.white,
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
  },
  name: {
    marginLeft: 15,
    marginTop: 7,
    fontSize: 16,
    fontFamily: "Viga_400Regular",
  },
  price: {
    marginLeft: 15,
    fontSize: 12,
    fontFamily: "Viga_400Regular",
    color: colors.darkgray,
  },
});
