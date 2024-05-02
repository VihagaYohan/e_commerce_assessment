import React, { Component } from "react";
import { StyleSheet } from "react-native";
// import { EXPO_PUBLIC_API_URL } from "react-native-dotenv";

// components
import { UIContainer, UITextView } from "../components/index";

interface propTypes {
  error: string;
}

const ErrorCard = (props: propTypes) => {
  console.log("url ", process.env.EXPO_PUBLIC_API_URL);
  return (
    <UIContainer
      innerContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UITextView
        text={process.env.EXPO_PUBLIC_API_URL}
        textStyle={{
          fontSize: 20,
        }}
      />
    </UIContainer>
  );
};

export default ErrorCard;
