import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/* =============================================================================
<ListHeader />
============================================================================= */
const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.description]}>description</Text>

      <Text style={[styles.text, styles.tooth]}>tooth</Text>

      <Text style={[styles.text, styles.status]}>status</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  description: {
    flex: 1.7,
  },
  tooth: {
    flex: 0.5,
  },
  status: {
    flex: 0.8,
  },
  text: {
    fontSize: 10,
    color: '#C2C2C2',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default ListHeader;
