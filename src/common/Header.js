import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

/* =============================================================================
<Header />
============================================================================= */
const Header = ({title, left, right, onLeftPress, onRightPress}) => {
  return (
    <View style={styles.container}>
      {left && (
        <TouchableOpacity style={styles.left} onPress={onLeftPress}>
          {left}
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>

      {right && (
        <TouchableOpacity style={styles.right} onPress={onRightPress}>
          {right}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: '#F7F6F1',
    borderBottomColor: '#EBEBEB',
  },
  left: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  right: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
