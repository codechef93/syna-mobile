import * as React from 'react';
import {StyleSheet} from 'react-native';

import List from './List';
import {Text} from '../../../../common';

/* =============================================================================
<Time />
============================================================================= */
const Time = ({data, value, onChange}) => {
  return (
    <>
      <Text style={styles.title}>Time</Text>

      <List data={data} selected={value} onItemPress={onChange} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    marginLeft: 30,
    fontSize: 20,
    fontFamily: 'Noah-Bold',
  },
});

export default Time;
