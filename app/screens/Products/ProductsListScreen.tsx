import React, { Component, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

// components
import { UIContainer, UILoader, UITextView } from "../../components/index.js";

// widgets
import { ItemCard } from "../../widgets/index.js";

// hooks
import { FetchData } from "../../hooks/index.js";

const ProductListScreen = () => {
  const { data, error, loading } = FetchData();

  return loading == true ? (
    <UILoader isLoading={loading} />
  ) : error != null ? (
    <UITextView text={error} />
  ) : (
    <UIContainer>
      <FlatList
        contentContainerStyle={{
          justifyContent: "space-between",
        }}
        numColumns={2}
        data={data}
        keyExtractor={(_, index) => `item-${index + 1}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ index, item }) => {
          if (index == 0) {
            console.log(item);
          }
          return <ItemCard index={index} item={item} />;
        }}
        ItemSeparatorComponent={() => {
          return <View />;
        }}
      />
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default ProductListScreen;
