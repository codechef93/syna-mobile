import * as React from 'react';
import {StyleSheet} from 'react-native';

import {Text, Touchable, View} from '../../../../common';

/* =============================================================================
<ListItem />
============================================================================= */
const ListItem = ({selected, date, active, value, marked, onPress}) => {
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
        selected ? styles.selected : active ? styles.active : styles.inactive,
      ]}>
      <Text
        style={[
          styles.text,
          selected
            ? styles.textSelected
            : active
            ? styles.textActive
            : styles.textInactive,
        ]}>
        {value}
      </Text>

      {marked && <View style={styles.marked} />}
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
  marked: {
    width: 12,
    height: 4,
    marginTop: 3,
    backgroundColor: '#8ADCE3',
  },
});

export default ListItem;
