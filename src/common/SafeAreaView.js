import React from 'react';
import {SafeAreaView as RNSafeAreaView, StyleSheet} from 'react-native';

/* =============================================================================
<SafeAreaView />
============================================================================= */
const SafeAreaView = ({children}) => {
  return <RNSafeAreaView style={styles.safeArea}>{children}</RNSafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default SafeAreaView;
