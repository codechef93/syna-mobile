import * as React from 'react';
import {StyleSheet} from 'react-native';

import {Text, Touchable} from '../../../../common';

/* =============================================================================
<ListItem />
============================================================================= */
const ListItem = ({value, selected, index, onPress}) => {
  return (
    <Touchable
      onPress={() => onPress(value)}
      style={[
        styles.container,
        index === 0 ? styles.first : undefined,
        selected ? styles.selected : styles.unselected,
      ]}>
      <Text
        style={[
          styles.text,
          selected ? styles.selectedText : styles.unselectedText,
        ]}>
        {value}
      </Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 111,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 14,
    marginHorizontal: 4,
    borderRadius: 31,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
  first: {
    marginLeft: 30,
  },
  selected: {
    backgroundColor: '#86D6DD',
  },
  unselected: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Noah-Bold',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  unselectedText: {
    color: '#595959',
  },
});

export default ListItem;
