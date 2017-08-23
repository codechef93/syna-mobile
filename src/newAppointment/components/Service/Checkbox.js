import * as React from 'react';
import {StyleSheet} from 'react-native';

import {View, Text, Touchable} from '../../../common';
import CheckMark from '../../../assets/icons/check-mark.svg';

/* =============================================================================
<Checkbox />
============================================================================= */
const Checkbox = ({label, value, selected, onChange}) => {
  return (
    <View paddingHorizontal={30}>
      <Touchable
        onPress={() => onChange(value)}
        style={[styles.container, selected ? styles.active : styles.inactive]}>
        <View
          style={[
            styles.checkbox,
            selected ? styles.checkboxActive : styles.checkboxInactive,
          ]}>
          {selected && <CheckMark />}
        </View>

        <Text style={styles.label}>{label}</Text>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 43,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 31,
  },
  active: {
    borderColor: '#C2C2C2',
    backgroundColor: '#EDEDED',
  },
  inactive: {
    borderColor: '#EEEEEE',
    backgroundColor: '#fff',
  },
  label: {
    marginLeft: 10,
    fontSize: 12,
    color: '#595959',
    fontFamily: 'Noah-Bold',
    textTransform: 'capitalize',
  },
  checkbox: {
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 2,
  },
  checkboxActive: {
    borderColor: '#86D6DD',
    backgroundColor: '#86D6DD',
  },
  checkboxInactive: {
    borderColor: '#EEEEEE',
    backgroundColor: '#fcfcfc',
  },
});

export default Checkbox;
