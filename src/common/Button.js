import * as React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  TouchableNativeFeedback,
} from 'react-native';

/* =============================================================================
<Button />
============================================================================= */
const Button = ({
  bold,
  width,
  color,
  title,
  height,
  loader,
  ripple,
  rounded,
  onPress,
  minWidth,
  disabled,
  fontSize,
  textStyle,
  buttonStyle,
  borderColor,
  borderRadius,
  marginVertical,
  backgroundColor,
  paddingVertical,
  marginHorizontal,
  rippleBackground,
  paddingHorizontal,
}) => {
  const _buttonStyle = {
    width,
    height,
    minWidth,
    borderColor,
    marginVertical,
    borderWidth: 1,
    backgroundColor,
    paddingVertical,
    marginHorizontal,
    paddingHorizontal,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.7 : 1,
    borderRadius: rounded ? 50 : borderRadius,
  };

  const _textStyle = {
    color,
    fontSize,
    marginLeft: 5,
    textTransform: 'uppercase',
    fontWeight: bold && 'bold',
  };

  const isAndroid = Platform.OS === 'android';

  if (isAndroid && ripple) {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        disabled={loader || disabled}
        background={rippleBackground}>
        <View style={[_buttonStyle, buttonStyle]}>
          {loader ? (
            <ActivityIndicator
              size={Platform.OS === 'android' ? fontSize + 5 : null}
              color={color}
            />
          ) : (
            <Text style={[_textStyle, textStyle]}>{title}</Text>
          )}
          <View />
        </View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      disabled={loader || disabled}
      style={[_buttonStyle, buttonStyle]}>
      {loader ? (
        <ActivityIndicator
          size={Platform.OS === 'android' ? fontSize + 5 : null}
          color={color}
        />
      ) : (
        <Text style={[_textStyle, textStyle]}>{title}</Text>
      )}
      <View />
    </TouchableOpacity>
  );
};

/* Default props
============================================================================= */
Button.defaultProps = {
  height: 50,
  bold: true,
  minWidth: 60,
  ripple: true,
  fontSize: 14,
  loader: false,
  textStyle: {},
  rounded: false,
  disabled: false,
  borderRadius: 5,
  buttonStyle: {},
  color: '#F7F7F7',
  width: undefined,
  borderColor: '#FFF',
  paddingVertical: 10,
  marginVertical: null,
  paddingHorizontal: 12,
  marginHorizontal: null,
  backgroundColor: '#78DE93',
  rippleBackground: TouchableNativeFeedback.SelectableBackground(),
};

/* Export
============================================================================= */
export default Button;
