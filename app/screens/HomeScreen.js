import React, { useState } from "react";
import {
  StyleSheet,
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
      price: "100 R$",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Mesa bonita",
      price: "120 R$",
      image:
        "https://www.vidaloucadecasada.com.br/wp-content/uploads/2017/07/Minha-mesa-jantar-estilo-industrial1.jpg.webp",
    },
    {
      name: "Casaco Velho",
      price: "110 R$",
      image:
        "https://www.vidaloucadecasada.com.br/wp-content/uploads/2017/07/Minha-mesa-jantar-estilo-industrial1.jpg.webp",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={sellings}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image style={styles.productPhoto} source={{ uri: item.image }} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  productPhoto: {
    width: 350,
    height: 70,
  },
});
