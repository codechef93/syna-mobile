import * as React from 'react';
import {StyleSheet} from 'react-native';

import {Text, Touchable} from '../../../../common';

/* =============================================================================
<ListItem />
============================================================================= */
const ListItem = ({value, date, selected, active, onPress}) => {
  const _handlePress = () => {
    if (active) {
      onPress(date);
    }
  };

  return (
    <Touchable
      onPress={_handlePress}
      style={[
        styles.container,
        selected && selected === date
          ? styles.selected
          : active
          ? styles.active
          : styles.inactive,
      ]}>
      <Text
        style={[
          styles.text,
          selected && selected === date
            ? styles.textSelected
            : active
            ? styles.textActive
            : styles.textInactive,
        ]}>
        {value}
      </Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2.5,
    borderWidth: 1,
    borderRadius: 6,
  },
  inactive: {
    borderColor: '#FAFAFA',
    backgroundColor: '#FAFAFA',
  },
  active: {
    borderColor: '#CFCFCF',
    backgroundColor: '#EDEDED',
  },
  selected: {
    borderColor: '#595959',
    backgroundColor: '#595959',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Noah-Bold',
  },
  textInactive: {
    color: '#CFCFCF',
  },
  textActive: {
    color: '#595959',
  },
  textSelected: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ListItem;
