import React, {useCallback, useEffect, useRef} from 'react';
import moment from 'moment';
import {StyleSheet, FlatList} from 'react-native';

import {Text, Touchable, View} from '../../../../common';
import {months} from '../../../static/data.json';

/* =============================================================================
<Months />
============================================================================= */
const Months = ({selected, onPress}) => {
  const _flatList = useRef();

  // Select the current month at start
  useEffect(() => {
    const month = moment().month();

    onPress(month);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    _flatList.current.scrollToOffset({
      animated: true,
      offset: selected * 100,
    });
  }, [selected]);

  const _renderItem = useCallback(
    ({item, index}) => {
      return (
        <Touchable style={styles.item} onPress={() => onPress(index)}>
          <Text
            style={
              selected === index ? styles.textActive : styles.textInActive
            }>
            {item}
          </Text>
        </Touchable>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected],
  );

  return (
    <View>
      <FlatList
        horizontal
        data={months}
        ref={_flatList}
        renderItem={_renderItem}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  textActive: {
    fontSize: 30,
    fontFamily: 'Noah-Bold',
    textTransform: 'capitalize',
  },
  textInActive: {
    fontSize: 18,
    color: '#CFCFCF',
    fontFamily: 'Noah-Bold',
    textTransform: 'capitalize',
  },
});

export default Months;
