import * as React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import Ellipsis from '../../assets/icons/ellipsis.svg';
import Logo from '../../assets/icons/logo-with-text.png';
import {logout as logoutAction} from '../../auth/redux/actions';

/* =============================================================================
<Header />
============================================================================= */
const Header = ({logout}) => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />

      <Menu onSelect={logout}>
        <MenuTrigger>
          <View style={styles.leftContent}>
            <Ellipsis />
          </View>
        </MenuTrigger>

        <MenuOptions>
          <MenuOption value={'logout'}>
            <View style={styles.menuOption}>
              <Text>Logout</Text>
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 101,
    height: 33,
    marginTop: 20,
    marginLeft: 22,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Noah-Bold',
  },
  leftContent: {
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  menuOption: {
    height: 43,
    justifyContent: 'center',
  },
});

const mapDispatchToProps = {
  logout: logoutAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(Header);
