import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

/* =============================================================================
<Title />
============================================================================= */
const Title = () => {
  return <Text style={styles.container}>Appointment</Text>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 68,
    marginLeft: 30,
    marginBottom: 16,
    fontSize: 24,
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default Title;
