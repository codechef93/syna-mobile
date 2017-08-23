import * as React from 'react';
import {View} from 'react-native';

/* =============================================================================
<Container />
============================================================================= */
const Container = ({
  style,
  center,
  padding,
  children,
  alignItems,
  justifyContent,
  backgroundColor,
}) => {
  const _style = {
    flex: 1,
    padding,
    backgroundColor,
    alignItems: center ? 'center' : alignItems,
    justifyContent: center ? 'center' : justifyContent,
  };

  return <View style={[_style, style]}>{children}</View>;
};

/* Default Props
============================================================================= */
Container.defaultProps = {
  center: false,
  backgroundColor: '#F7F7F7',
};

/* Export
============================================================================= */
export default Container;
