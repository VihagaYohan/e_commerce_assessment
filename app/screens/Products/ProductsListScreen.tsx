import React, { Component, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

// components
import { UIContainer, UILoader, UITextView } from "../../components/index.js";

// widgets
import { ItemCard, ErrorCard } from "../../widgets/index.js";

// hooks
import { FetchData } from "../../hooks/index.js";

// navigation
import { Routes } from "../../navigation/index.js";
import { DIMENSION } from "../../constants/index.js";

const ProductListScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const { data, error, loading } = FetchData();

  return loading == true ? (
    <UILoader isLoading={loading} />
  ) : error != null ? (
    <ErrorCard error={error} />
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
          return (
            <ItemCard
              index={index}
              item={item}
              onPress={() => {
                navigation.navigate(Routes.productDetailsScreen, {
                  item: item,
                });
              }}
            />
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={{ marginBottom: DIMENSION.PADDING / 2 }} />;
        }}
      />
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default ProductListScreen;
