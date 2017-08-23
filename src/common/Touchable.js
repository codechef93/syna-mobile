import * as React from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

/* Constant Shadow properties
============================================================================= */
const shadowStyle = {
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  elevation: 5,
};

/* =============================================================================
<Touchable />
============================================================================= */
const Touchable = ({
  flex,
  style,
  margin,
  center,
  shadow,
  ripple,
  padding,
  onPress,
  children,
  disabled,
  alignItems,
  justifyContent,
  marginVertical,
  backgroundColor,
  paddingVertical,
  rippleBackground,
  marginHorizontal,
  paddingHorizontal,
}) => {
  const _style = {
    flex,
    margin,
    padding,
    marginVertical,
    backgroundColor,
    paddingVertical,
    marginHorizontal,
    paddingHorizontal,
    justifyContent: center ? 'center' : justifyContent,
    alignItems: center ? 'center' : alignItems,
  };

  const isAndroid = Platform.OS === 'android';

  if (isAndroid && ripple) {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        disabled={disabled}
        background={rippleBackground}>
        <View style={[_style, shadow && shadowStyle, style]}>{children}</View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[_style, shadow && shadowStyle, style]}>
      {children}
    </TouchableOpacity>
  );
};

/* Default Props
============================================================================= */
Touchable.defaultProps = {
  flex: 0,
  margin: null,
  shadow: false,
  center: false,
  padding: null,
  ripple: false,
  marginVertical: null,
  paddingVertical: null,
  marginHorizontal: null,
  paddingHorizontal: null,
  justifyContent: undefined,
  backgroundColor: 'transparent',
  rippleBackground: TouchableNativeFeedback.SelectableBackground(),
};

/* Exports
============================================================================= */
export default Touchable;
