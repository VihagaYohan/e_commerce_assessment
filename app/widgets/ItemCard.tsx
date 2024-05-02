import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

// components
import { UITextView, UIImage } from "../components/index";

// constants
import { COLORS, DIMENSION, STYLES } from "../constants";

// model
import { Product } from "../models/index";

// utils
import { normalizeSize } from "../utils/helpers";

const itemWidth =
  (DIMENSION.SCREEN_WIDTH - DIMENSION.PADDING * 2) / 2 - DIMENSION.PADDING;

interface propTypes {
  item: Product;
  index: number;
  onPress: () => void;
}

const ItemCard = (props: propTypes) => {
  const productPrice = `${props.item.price.currency} ${props.item.price.amount}`;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          marginRight: props.index % 2 == 0 ? 15 : 0,
        },
        STYLES.shadow,
      ]}
      onPress={() => {
        props.onPress();
      }}
    >
      <UIImage url={props.item.mainImage} imageStyles={styles.image} />

      <UITextView text={props.item.name} textStyle={styles.title} />

      <UITextView text={productPrice} textStyle={styles.price} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    marginTop: 10,
    overflow: "hidden",
    backgroundColor: COLORS.white,
    borderRadius: DIMENSION.PADDING,
    paddingHorizontal: DIMENSION.PADDING / 5,
    paddingVertical: DIMENSION.PADDING,
  },
  image: {
    width: itemWidth,
    aspectRatio: 1,
  },
  title: {
    fontSize: normalizeSize(35),
    color: COLORS.primaryColor,
  },
  price: {
    fontSize: normalizeSize(30),
    color: COLORS.red.red800,
  },
});

export default ItemCard;
