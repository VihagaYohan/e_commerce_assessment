import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.contianer}>
      <Text>Home screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
