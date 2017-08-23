import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

import {View} from '../../common';

/* =============================================================================
<Header />
============================================================================= */
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar} />

      <Text style={styles.title}>New appointment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  bar: {
    width: 95,
    height: 4,
    alignSelf: 'center',
    marginVertical: 16,
    borderRadius: 20,
    backgroundColor: '#EDEDED',
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    fontSize: 24,
    fontFamily: 'Noah-Bold',
  },
});

export default Header;
