import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

/* =============================================================================
<Item />
============================================================================= */
const Item = ({label, icon, active, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.container}>
      {icon}
      {active && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 5,
    fontSize: 8,
    color: '#000000',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default Item;
