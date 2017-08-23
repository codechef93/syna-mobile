import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import {View, Text} from '../../common';

/* =============================================================================
<CodeInput />
============================================================================= */
const CodeInput = ({value, error, onChange, onSubmit}) => {
  return (
    <View style={styles.container}>
      <View style={styles.numberInput}>
        <TextInput
          value={value}
          keyboardType="numeric"
          onChangeText={onChange}
          style={styles.txtInput}
          placeholder=""
          placeholderTextColor="#999"
          onSubmitEditing={onSubmit}
        />
      </View>

      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  numberInput: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  txtInput: {
    flex: 1,
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

export default CodeInput;
