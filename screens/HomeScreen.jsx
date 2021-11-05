import React from "react";
import { FlatList, View } from "react-native";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../db/products";

export default () => {
  const products = getProducts();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        ItemSeparatorComponent={() => <View style={{ margin: 12 }} />}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
