import React, {useCallback} from 'react';
import {StyleSheet, FlatList} from 'react-native';

import ListItem from './ListItem';

/* =============================================================================
<List />
============================================================================= */
const List = ({data, selected, onItemPress}) => {
  const renderItem = useCallback(
    ({item, index}) => (
      <ListItem
        value={item}
        index={index}
        onPress={onItemPress}
        selected={selected === item}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected],
  );

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  title: {
    marginLeft: 30,
    marginBottom: 14,
    fontSize: 20,
    fontFamily: 'Noah-Bold',
  },
});

export default List;
