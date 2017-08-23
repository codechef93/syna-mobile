import * as React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

/* =============================================================================
<Avatar />
============================================================================= */
const Avatar = ({
  text,
  size,
  bold,
  color,
  ripple,
  source,
  onPress,
  disabled,
  textStyle,
  imageStyle,
  containerStyle,
  backgroundColor,
  rippleBackground,
}) => {
  const _containerStyle = {
    width: size,
    height: size,
    backgroundColor,
    alignItems: 'center',
    borderRadius: size / 2,
    justifyContent: 'center',
  };

  const _textStyle = {
    color,
    fontSize: 16,
    fontWeight: bold ? 'bold' : 'normal',
  };

  const _imageStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const isAndroid = Platform.OS === 'android';

  if (isAndroid && ripple) {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        disabled={disabled}
        background={rippleBackground}>
        <View style={[_containerStyle, containerStyle]}>
          {text && (
            <Text style={[_textStyle, textStyle]}>{text.toUpperCase()}</Text>
          )}

          {source && (
            <Image source={source} style={[_imageStyle, imageStyle]} />
          )}
        </View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[_containerStyle, containerStyle]}>
      {text && (
        <Text style={[_textStyle, textStyle]}>{text.toUpperCase()}</Text>
      )}

      {source && <Image source={source} style={[_imageStyle, imageStyle]} />}
    </TouchableOpacity>
  );
};

/* Default props
============================================================================= */
Avatar.defaultProps = {
  size: 50,
  bold: true,
  ripple: true,
  color: '#000',
  disabled: false,
  backgroundColor: '#FFF',
  rippleBackground: TouchableNativeFeedback.SelectableBackground(),
};

/* Export
============================================================================= */
export default Avatar;
