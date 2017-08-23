import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import PlusIcon from '../../assets/icons/plus-icon.svg';
import BottomTabEllipse from '../../assets/icons/bottom-tab-ellipse.svg';
import Logo from '../../assets/icons/logo.png';

/* =============================================================================
<SpecialItem />
============================================================================= */
const SpecialItem = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.circle}>
        <BottomTabEllipse />
      </View>

      <Image style={styles.image} source={Logo} />

      <View style={styles.plusIcon}>
        <PlusIcon />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 12,
  },
  circle: {
    position: 'absolute',
    top: -12,
    width: 66,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 66 / 2,
    backgroundColor: '#fff',
    borderColor: '#999',
  },
  innerCircle: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 58 / 2,
    borderWidth: 8,
    borderColor: '#fff',
    backgroundColor: '#000',
  },
  plusIcon: {
    position: 'absolute',
    top: 6,
    right: 23,
  },
  image: {
    width: 22.66,
    height: 21,
  },
});

export default SpecialItem;
