import React, { Component } from "react";
import { StyleSheet, View, ImageProps, ImageStyle, Image } from "react-native";

interface propTypes extends ImageProps {
  url: string;
  imageStyles?: ImageStyle | ImageStyle[];
}

const UIImage = ({ url, imageStyles, ...props }: propTypes) => {
  return (
    <Image
      source={{ uri: url }}
      style={imageStyles}
      resizeMode="contain"
      defaultSource={require("../../assets/default-image.png")}
    />
  );
};

const styles = StyleSheet.create({});

export default UIImage;
