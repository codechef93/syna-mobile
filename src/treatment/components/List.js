import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Text} from '../../common';
import Header from './Header';
import ListItem from './ListItem';

const renderItem = ({item}) => <ListItem {...item} />;

/* =============================================================================
<List />
============================================================================= */
const List = ({data}) => {
  if(data){
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={Header}
      keyExtractor={item => item.code}
      contentContainerStyle={styles.container}
    />
  )}else
  return(<>
    <Header />
    <Text style = {styles.treatmentText}>No treatment to show</Text>
    </>)
  
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  treatmentText:{
    padding:30
  }
});

export default List;
