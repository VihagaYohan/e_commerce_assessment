import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

// components
import { UIContainer } from "../../components/index.js";
import { Endpoints } from "../../api/index.js";

// api

const ProductListScreen = () => {
  return (
    <View>
      <Text>Product list screen</Text>
      <Text>{Endpoints.productList}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductListScreen;
