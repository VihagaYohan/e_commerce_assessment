import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Platform,
} from "react-native";

// constants
import { COLORS, ICONS } from "../constants/index";

interface propTypes {
  style?: ViewStyle;
  onClickBack: () => void;
}

const { MaterialIcon } = ICONS;

const UIHeader = (props: propTypes) => {
  return (
    <TouchableOpacity
      onPress={() => props.onClickBack()}
      style={styles.container}
    >
      <MaterialIcon
        name={Platform.OS == "ios" ? "arrow-back-ios" : "arrow-back"}
        color={COLORS.primaryColor}
        size={25}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Platform.OS == "ios" ? 100 : 50,
    height: 30,
  },
});

export default UIHeader;
