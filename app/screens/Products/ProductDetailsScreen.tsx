import React, { Component, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

// components
import {
  UIContainer,
  UIImage,
  UITextView,
  UIButton,
  UIIconButton,
} from "../../components/index";

// navigation
import { RootParamList, Routes } from "../../navigation/index";

// constants
import { DIMENSION, ICONS, COLORS, STYLES } from "../../constants";

// utils
import { HELPERS } from "../../utils/index";

// enum
import { StockStatus } from "../../enums/Index";

const { MaterialIcon } = ICONS;

const ProductDetailsScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<RootParamList, "product_details_screen">;
}) => {
  const { item } = route.params;
  const productPrice = `${item.price.currency} ${item.price.amount}`;
  const [sizeIndex, setSizeIndex] = useState<number>(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.parentView}>
        {/* back button */}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcon
            name={Platform.OS == "ios" ? "arrow-back-ios" : "arrow-back"}
            color={COLORS.primaryColor}
            size={25}
          />
        </TouchableOpacity>

        <ScrollView
          style={styles.listStyle}
          showsVerticalScrollIndicator={false}
        >
          <UIImage url={item.mainImage} imageStyles={styles.coverImage} />

          <UITextView text={item.name} textStyle={styles.title} />

          {/* brand name and stock availability */}
          <View style={styles.subContainer}>
            <UITextView
              text={item.brandName.toUpperCase()}
              textStyle={styles.brandTitle}
            />

            <UITextView
              text={item.stockStatus}
              textStyle={[
                styles.status,
                {
                  color:
                    item.stockStatus == StockStatus.InStock
                      ? COLORS.primaryColor
                      : COLORS.red.red500,
                },
              ]}
            />
          </View>

          {/* size */}
          <View
            style={{
              marginVertical: DIMENSION.MARGIN / 2,
            }}
          >
            <UITextView text="Size" textStyle={styles.subTitle} />

            <View style={styles.sizeContainer}>
              {item.sizes.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.sizeItem,
                      {
                        borderWidth: index == sizeIndex ? 0 : 1,

                        backgroundColor:
                          index == sizeIndex
                            ? COLORS.primaryColor
                            : COLORS.white,
                      },
                    ]}
                    onPress={() => setSizeIndex(index)}
                  >
                    <UITextView
                      text={item}
                      textStyle={{
                        color:
                          index == sizeIndex
                            ? COLORS.white
                            : COLORS.primaryColor,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <UITextView text="About Product" textStyle={styles.subTitle} />

            <UITextView
              text={item.description}
              textStyle={styles.description}
            />

            <UITextView
              text={item.description}
              textStyle={styles.description}
            />
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <UITextView
          text={productPrice}
          textStyle={{
            fontSize: HELPERS.normalizeSize(40),
            marginRight: DIMENSION.PADDING / 2,
            fontWeight: "bold",
          }}
        />

        <UIButton
          label="Add to cart"
          onClick={() => console.log("added")}
          buttonTextStyle={{
            fontSize: 20,
          }}
          buttonContainerStyle={{ flex: 1 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentView: {
    width: DIMENSION.SCREEN_WIDTH,
    height: DIMENSION.SCREEN_HEIGHT - 120,
  },

  buttonContainer: {
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(0,0,0,0)",
    width: Platform.OS == "ios" ? 100 : 50,
    height: 30,
    zIndex: 1,
  },

  listStyle: {
    flex: 1,
    paddingHorizontal: DIMENSION.PADDING,
  },

  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  brandTitle: {
    fontWeight: "bold",
    fontSize: HELPERS.normalizeSize(30),
  },

  status: {
    fontWeight: "bold",
  },

  sizeContainer: {
    flexDirection: "row",
    marginVertical: DIMENSION.MARGIN,
  },

  sizeItem: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    borderRadius: DIMENSION.PADDING,
  },

  coverImage: {
    width: DIMENSION.SCREEN_WIDTH,
    aspectRatio: 1,
  },
  title: {
    fontSize: HELPERS.normalizeSize(45),
    fontWeight: "bold",
  },
  descriptionContainer: {
    marginVertical: DIMENSION.MARGIN,
  },
  description: {
    fontSize: HELPERS.normalizeSize(30),
  },
  subTitle: {
    fontSize: HELPERS.normalizeSize(30),
    marginBottom: DIMENSION.BORDER_RADIUS,
    fontStyle: "italic",
    fontWeight: "700",
  },
});

export default ProductDetailsScreen;
