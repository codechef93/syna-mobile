import * as React from 'react';
import {StyleSheet} from 'react-native';

import {View, Text} from '../../../../common';

/* =============================================================================
<Days />
============================================================================= */
const Days = () => {
  return (
    <View horizontal paddingHorizontal={30}>
      <Text style={styles.text}>mon</Text>
      <Text style={styles.text}>tue</Text>
      <Text style={styles.text}>wed</Text>
      <Text style={styles.text}>thu</Text>
      <Text style={styles.text}>fri</Text>
      <Text style={styles.text}>sat</Text>
      <Text style={styles.text}>sun</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    marginTop: 24,
    marginBottom: 9.5,
    fontSize: 10,
    textAlign: 'center',
    color: '#C2C2C2',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default Days;
