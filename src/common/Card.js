import * as React from 'react';
import {View, StyleSheet} from 'react-native';

/* =============================================================================
<Card />
============================================================================= */
const Card = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default Card;
