import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { getProductById } from "../db/products";

export default ({ route, navigation }) => {
  const { productId } = route.params;
  const product = getProductById(productId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: product
        ? `Product - ${product.name.toUpperCase()}`
        : "Product not found",
    });
  }, [navigation]);

  if (!product) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Product not found</Text>
        <Button
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          Go to home
        </Button>
      </View>
    );
  }

  return (
    <View>
      <Text>{JSON.stringify(product)}</Text>
    </View>
  );
};
