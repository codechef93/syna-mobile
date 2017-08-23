import * as React from 'react';
import {View} from 'react-native';

/* =============================================================================
<CustomView />
============================================================================= */
const CustomView = ({
  flex,
  style,
  center,
  margin,
  padding,
  children,
  horizontal,
  alignItems,
  justifyContent,
  marginVertical,
  paddingVertical,
  backgroundColor,
  marginHorizontal,
  paddingHorizontal,
  ...props
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
    flexDirection: horizontal ? 'row' : 'column',
    alignItems: center ? 'center' : alignItems,
    justifyContent: center ? 'center' : justifyContent,
  };

  return (
    <View style={[_style, style]} {...props}>
      {children}
    </View>
  );
};

/* Default Props
============================================================================= */
CustomView.defaultProps = {
  center: false,
  horizontal: false,
  backgroundColor: 'transparent',
};

/* Export
============================================================================= */
export default CustomView;
