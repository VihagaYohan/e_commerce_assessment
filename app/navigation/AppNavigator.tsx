import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { ProductDetailsScreen } from "../screens/index";

// navigator
import { BottomNavigator, Routes, RootParamList } from "./index";

const Stack = createNativeStackNavigator<RootParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.home}
        component={BottomNavigator}
        options={{
          title: "PRODUCTS LIST",
        }}
      />
      <Stack.Screen
        name={Routes.productDetailsScreen}
        component={ProductDetailsScreen}
        options={{ title: "DETAILS" }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
