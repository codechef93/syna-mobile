import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import {SafeAreaView} from '../../common';
import Login from '../../assets/images/login.png';
import LoginButton from '../components/LoginButton';

/* =============================================================================
<LoginScreen />
============================================================================= */
const LoginScreen = ({navigation}) => {
  const _handleLogin = () => {
    navigation.navigate('PhoneInput');
  };

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={Login}>
        <LoginButton onPress={_handleLogin} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 30,
  },
});

export default LoginScreen;
