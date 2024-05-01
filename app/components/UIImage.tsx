import React, { Component } from "react";
import { StyleSheet, View, ImageProps, ImageStyle } from "react-native";
import { Image } from "expo-image";

interface propTypes extends ImageProps {
  url: String;
  imageStyles?: ImageStyle | ImageStyle[];
}

const UIImage = ({ url, imageStyles, ...props }: propTypes) => {
  return (
    <Image
      source={{ uri: url }}
      style={[styles.image, imageStyles]}
      cachePolicy="memory"
      contentFit="contain"
      defaultSource={require("../../assets/default-image.png")}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default UIImage;
