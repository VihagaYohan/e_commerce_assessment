import React, { Component, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

// components
import {
  UIButton,
  UIContainer,
  UITextView,
  UIImage,
  UIIconButton,
} from "../../components/index";

// redux
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  increaseCount,
  decreaseCount,
  removeItem,
} from "../../store/slice/productSlice";

// utils
import { HELPERS } from "../../utils/index";

// constants
import { COLORS, DIMENSION, ICONS } from "../../constants";

const { MaterialIcon } = ICONS;

const CartScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const { savedItems, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  // increase count
  const increaseQty = (id: number) => {
    dispatch(increaseCount(id));
    console.log(savedItems);
  };

  // decrease count
  const decreaseQty = (id: number) => {
    dispatch(decreaseCount(id));
    console.log(savedItems);
  };

  // handle remove item from cart
  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <UIContainer>
      {savedItems.length == 0 ? (
        <View style={styles.titleContainer}>
          <UITextView
            text="There are no items in your cart"
            textStyle={styles.title}
          />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          {/* cart items */}
          <FlatList
            data={savedItems}
            keyExtractor={(_, index) => `cart-item${index}`}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={styles.cartItemContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    {/* image */}
                    <UIImage
                      url={item.imageUrl}
                      imageStyles={styles.cartItemImage}
                    />

                    {/* details */}
                    <View style={styles.detailsContainer}>
                      {/* product name  */}
                      <UITextView
                        text={item.name}
                        numberOfLines={2}
                        textStyle={styles.itemTitle}
                      />

                      {/* sub-container */}
                      <View style={styles.subContainer}>
                        <View style={styles.totalContainer}>
                          {/* line-total */}
                          <UITextView
                            text={(item.unitPrice * item.qty)
                              .toFixed(2)
                              .toString()}
                            textStyle={styles.itemTotal}
                          />

                          {/* qty controller */}
                          <View style={styles.qtyController}>
                            <TouchableOpacity
                              style={styles.qtyButton}
                              onPress={() => increaseQty(index)}
                            >
                              <MaterialIcon
                                name="add"
                                size={24}
                                color={COLORS.primaryColor}
                              />
                            </TouchableOpacity>

                            <UITextView
                              text={item.qty.toString()}
                              textStyle={styles.qty}
                            />

                            <TouchableOpacity
                              style={styles.qtyButton}
                              onPress={() => decreaseQty(index)}
                            >
                              <MaterialIcon
                                name="horizontal-rule"
                                size={24}
                                color={COLORS.primaryColor}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>

                        <TouchableOpacity
                          style={styles.removeButton}
                          onPress={() =>
                            Alert.alert(
                              "Message",
                              "Do you want to remove this item from cart ?",
                              [
                                {
                                  text: "Yes",
                                  onPress: () =>
                                    handleRemoveItem(item.id.toString()),
                                },
                                {
                                  text: "Cancel",
                                  onPress: () => {
                                    return;
                                  },
                                  style: "cancel",
                                },
                              ]
                            )
                          }
                        >
                          <MaterialIcon
                            name="close"
                            size={24}
                            color={COLORS.red.red800}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 10 }} />;
            }}
          />

          {/* check-out button */}
          <View style={styles.buttonContainer}>
            <UITextView
              text={`Total GBP ${total.toFixed(2)}`}
              textStyle={styles.total}
            />

            <UIButton
              label="Check-out"
              buttonTextStyle={{
                fontSize: 20,
              }}
              onClick={() => console.log("check out")}
            />
          </View>
        </View>
      )}
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: HELPERS.normalizeSize(35),
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  cartItemContainer: {
    width: DIMENSION.SCREEN_WIDTH - DIMENSION.PADDING * 2,
    height: 100,
    borderWidth: 1,
    borderRadius: DIMENSION.BORDER_RADIUS,
    overflow: "hidden",
    backgroundColor: COLORS.white,
    paddingHorizontal: DIMENSION.PADDING,
  },
  cartItemImage: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: DIMENSION.PADDING,
    paddingVertical: DIMENSION.PADDING,
  },
  itemTitle: {
    fontSize: HELPERS.normalizeSize(28),
    fontWeight: "bold",
    fontStyle: "italic",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTotal: {
    fontSize: HELPERS.normalizeSize(30),
    fontWeight: "bold",
  },
  qtyController: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: DIMENSION.PADDING * 2,
    alignItems: "center",
    marginHorizontal: DIMENSION.PADDING,
  },
  qtyButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  qty: {
    fontSize: HELPERS.normalizeSize(30),
    marginHorizontal: DIMENSION.PADDING,
  },
  removeButton: {
    width: 40,
    height: 40,
  },
  total: {
    textAlign: "center",
    fontSize: HELPERS.normalizeSize(40),
    fontWeight: "bold",
    marginVertical: DIMENSION.PADDING / 2,
  },
});

export default CartScreen;
