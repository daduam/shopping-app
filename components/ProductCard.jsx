import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Button, Card, Paragraph, Text, Title } from "react-native-paper";

export default ({ item }) => {
  const navigation = useNavigation();

  return (
    <Card>
      <Card.Cover source={{ uri: item.imgSrc }} />
      <Card.Content>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Title style={{ textTransform: "uppercase" }}>{item.name}</Title>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Text style={{ fontWeight: "bold" }}>{item.price.sym}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {item.price.real}
            </Text>
            <Text style={{ fontWeight: "bold" }}>{item.price.dec}</Text>
          </View>
        </View>
        <Paragraph>{item.desc}</Paragraph>
        <Card.Actions>
          <Button
            mode="outlined"
            onPress={() => {
              navigation.navigate("product", { productId: item.id });
            }}
          >
            Product Detail
          </Button>
          <Button
            icon="cart"
            mode="contained"
            onPress={() => {
              console.log(item.id);
            }}
          >
            Add to cart
          </Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};
