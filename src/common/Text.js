import * as React from 'react';
import {Text} from 'react-native';

/* =============================================================================
<CustomText />
============================================================================= */
const CustomText = ({
  flex,
  style,
  align,
  color,
  italic,
  children,
  fontSize,
  fontFamily,
  fontWeight,
  numberOfLines,
  marginVertical,
  marginHorizontal,
  ...props
}) => {
  const _style = {
    flex,
    color,
    fontSize,
    marginVertical,
    marginHorizontal,
    textAlign: align,
    fontFamily,
    fontWeight,
  };

  return (
    <Text numberOfLines={numberOfLines} style={[_style, style]} {...props}>
      {children}
    </Text>
  );
};

/* Default Props
============================================================================= */
CustomText.defaultProps = {
  fontSize: 14,
  italic: false,
  align: 'left',
  color: '#1E1E1E',
  marginVertical: 0,
  marginHorizontal: 0,
  numberOfLines: null,
  fontWeight: undefined,
  fontFamily: 'Noah-Regular',
};

/* Export
============================================================================= */
export default CustomText;
