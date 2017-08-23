import * as React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import BackgroundImage from '../assets/images/header-background.png';

/* =============================================================================
<Background />
============================================================================= */
const Background = () => {
  return (
    <View style={styles.container}>
      <Image source={BackgroundImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 143,
    zIndex: -1,
    backgroundColor: '#999',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Background;
