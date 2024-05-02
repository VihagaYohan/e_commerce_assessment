import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// constants
import { ICONS, COLORS } from "../constants/index";

// screens
import { ProductListScreen, CartScreen } from "../screens/index";

// routes
import Routes from "./Routes";

const { IoniconIcon } = ICONS;
const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator
      id="bottom_navigator"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primaryColor,
      }}
    >
      <Tab.Screen
        name={Routes.productListScreen}
        component={ProductListScreen}
        options={{
          title: "Shopping",
          tabBarIcon: ({ color, size }) => {
            return <IoniconIcon name="home" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name={Routes.cartScreen}
        component={CartScreen}
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => {
            return <IoniconIcon name="home" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
