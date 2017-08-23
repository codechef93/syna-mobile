import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {ImageBackground, StyleSheet} from 'react-native';

import {SafeAreaView} from '../../common';
import Splash from '../../assets/images/splash.png';
import {logout as logoutAction, login as loginAction} from '../redux/actions';

/* =============================================================================
<SplashScreen />
============================================================================= */
const SplashScreen = ({login, logout}) => {
  useEffect(() => {
    setTimeout(() => {
      // login({});
      logout();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground source={Splash} style={styles.container} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'contain',
  },
});

const mapDispatchToProps = {
  login: loginAction,
  logout: logoutAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(SplashScreen);
