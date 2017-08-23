import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {View, Text, Touchable} from '../../common';
import LeftArrow from '../../assets/icons/left-arrow.png';

/* =============================================================================
<Header />
============================================================================= */
const Header = ({label, placeholder}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Touchable
        paddingVertical={20}
        paddingHorizontal={16}
        onPress={() => navigation.goBack()}>
        <Image style={styles.image} source={LeftArrow} />
      </Touchable>

      <Text style={styles.title}>{label}</Text>

      <Text style={styles.placeholder}>{placeholder}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: 15,
    height: 15,
  },
  title: {
    marginHorizontal: 30,
    fontSize: 20,
    color: '#000',
    fontFamily: 'Noah-Bold',
  },
  placeholder: {
    marginHorizontal: 30,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Noah-Bold',
  },
});

export default Header;
