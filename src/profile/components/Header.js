import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {View} from '../../common';

/* =============================================================================
<Header />
============================================================================= */
const Header = ({id}) => {
  return (
    <View style={styles.container}>
      <View flex={1} center>

        <Text style={styles.id}>patient id:{id}</Text>
        <Text style={styles.name}>Welcome to Syna</Text>
      </View>

      <Text style={styles.title}>General</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 249,
    paddingHorizontal: 30,
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 82 / 2,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Noah-Bold',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    marginBottom: 30
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Noah-Bold',
  },
  id: {
    fontSize: 11,
    color: '#595959',
    textAlign: 'center',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default Header;
