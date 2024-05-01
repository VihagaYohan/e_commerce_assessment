import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';

// components
import {UITextView} from '../components';

// constants
import {STYLES, COLORS, DIMENSION} from '../constants';

interface propTypes extends TextInputProps {
  placeholder?: string;
  textInputStyles?: TextStyle | TextStyle[];
}

const UITextInput = ({
  placeholder = 'Type here',
  textInputStyles,
  ...props
}: propTypes) => {
  return (
    <View style={styles.fieldContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.text}
        placeholderTextColor={COLORS.grey.grey400}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    borderWidth: 1,
    borderRadius: DIMENSION.BORDER_RADIUS,
    borderColor: COLORS.grey.grey400,
  },
  text: {
    color: COLORS.grey.grey800,
    paddingVertical: 0,
    paddingHorizontal: 10,
    height: 40,
  },
});

export default UITextInput;
