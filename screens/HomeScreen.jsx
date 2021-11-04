import React from "react";
import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import { getProducts } from "../db/products";

export default () => {
  const products = getProducts();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View key={index}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
