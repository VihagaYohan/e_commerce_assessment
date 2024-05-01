import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';

// components
import {UITextView} from '../index';

// constants
import {COLORS, DIMENSION} from '../../constants';

// utils
import {HELPERS} from '../../utils';

interface propTypes {
  label: String;
  icon?: any;
  showLoading?: boolean;
  buttonContainerStyle?: ViewStyle | ViewStyle[];
  buttonTextStyle?: TextStyle | TextStyle[];
  width?: String;
  onClick: () => void;
}

const UIButton = (props: propTypes) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...props.buttonContainerStyle,
      }}
      onPress={() => props.onClick()}
      {...props}>
      <UITextView
        text={props.label}
        textStyle={{...styles.buttonTextStyle, ...props.buttonTextStyle}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    borderRadius: DIMENSION.BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryColor,
    paddingVertical: DIMENSION.PADDING,
  },
  buttonTextStyle: {
    fontSize: HELPERS.normalizeSize(17),
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default UIButton;
