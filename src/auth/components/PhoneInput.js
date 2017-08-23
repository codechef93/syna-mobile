import React from 'react';
import {TextInput, Image, StyleSheet} from 'react-native';

import {View, Text} from '../../common';
import ArrowDown from '../../assets/icons/arrow-down.png';
import TunisiaFlag from '../../assets/icons/tunisia-flag.jpg';

/* =============================================================================
<PhoneInput />
============================================================================= */
const PhoneInput = ({value, error, onChange, onSubmit}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.flagContainer}>
          <Image source={TunisiaFlag} style={{width: 20, height: 15}} />
        </View>

        <View style={styles.downArrow}>
          <Image source={ArrowDown} style={{width: 10, height: 10}} />
        </View>

        <View style={styles.numberInput}>
          <Text marginHorizontal={6} style={styles.txtInput}>
            +216
          </Text>

          <TextInput
            value={value}
            keyboardType="numeric"
            onChangeText={onChange}
            style={[styles.txtInput, {flex: 1}]}
            placeholder=""
            maxLength={8}
            placeholderTextColor="#999"
            onSubmitEditing={onSubmit}
          />
        </View>
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  downArrow: {
    paddingHorizontal: 6,
  },
  numberInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  txtInput: {
    margin: 0,
    padding: 0,
    fontSize: 18,
    fontFamily: 'Noah-Bold',
  },
  error: {
    marginTop: 6,
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Noah-Bold',
    textTransform: 'capitalize',
  },
});

export default PhoneInput;
