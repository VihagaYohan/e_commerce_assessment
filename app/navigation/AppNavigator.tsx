import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { ProductDetailsScreen } from "../screens/index";

// navigator
import { BottomNavigator, Routes, RootParamList } from "./index";

const Stack = createNativeStackNavigator<RootParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.home} component={BottomNavigator} />
      <Stack.Screen
        name={Routes.productDetailsScreen}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
