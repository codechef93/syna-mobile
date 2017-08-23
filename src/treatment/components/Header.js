import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

import {View, Background} from '../../common';

/* =============================================================================
<Header />
============================================================================= */
const Header = () => {
  return (
    <View>
      <Background />

      <Text style={styles.title}>TREATMENT PLAN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 68,
    marginLeft: 30,
    marginBottom: 17.5,
    fontSize: 24,
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default Header;
