import React from 'react';
import {StyleSheet} from 'react-native';

import {Text, Touchable} from '../../common';

/* =============================================================================
<LoginButton />
============================================================================= */
const LoginButton = ({onPress}) => {
  return (
    <Touchable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Log in</Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Noah-Bold',
  },
});

export default LoginButton;
