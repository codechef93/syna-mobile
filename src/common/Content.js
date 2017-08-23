import * as React from 'react';
import {View, ScrollView} from 'react-native';

/* =============================================================================
<Content />
============================================================================= */
const Content = ({
  style,
  center,
  padding,
  children,
  alignItems,
  justifyContent,
  containerStyle,
  backgroundColor,
  scrollViewStyle,
  paddingVertical,
  paddingHorizontal,
  contentContainerStyle,
}) => {
  const _style = {
    flex: 1,
    padding,
    backgroundColor,
    paddingVertical,
    paddingHorizontal,
    alignItems: center ? 'center' : alignItems,
    justifyContent: center ? 'center' : justifyContent,
  };

  const _containerStyle = {
    flex: 1,
  };

  const _contentContainerStyle = {
    flexGrow: 1,
  };

  return (
    <View style={[_containerStyle, containerStyle]}>
      <ScrollView
        style={scrollViewStyle}
        contentContainerStyle={[_contentContainerStyle, contentContainerStyle]}>
        <View style={[_style, style]}>{children}</View>
      </ScrollView>
    </View>
  );
};

/* Default Props
============================================================================= */
Content.defaultProps = {
  center: false,
  backgroundColor: '#F7F7F7',
};

/* Export
============================================================================= */
export default Content;
