import * as React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';
import { Text } from '../../common';
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import { getVisibilityFilter, getDateFilter, getLastAppoinments, getNextAppointments } from '../redux/selectors';


const getItemLayout = (data, index) => ({
  index,
  length: 242,
  offset: 242 * index
});

const renderItem = ({ item }) => <ListItem key={item._id} {...item} />;

const getData = (filter, nextAppointments, lastAppointments) => {
  if (filter === 'next') {
    return nextAppointments;
  }

  return lastAppointments;
};

/* =============================================================================
<List />
============================================================================= */
const List = ({ visibilityFilter, dateFilter, lastAppointments, nextAppointments }) => {
  const _flatList = React.useRef();

  React.useEffect(() => {
    if (dateFilter) {
      const data = getData(visibilityFilter);

      for (let i = 0; i < data ? data.length : 0; i++) {
        if (data[i].date === dateFilter) {
          _flatList.current.scrollToIndex({ index: i });
          break;
        }
      }
    }
  }, [dateFilter, visibilityFilter]);
  var data = getData(visibilityFilter, nextAppointments, lastAppointments)
  if (data && data.length != 0) {
    return (
      <FlatList
        ref={_flatList}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={item => item.id}
        data={data}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.container}
      />
    );
  } else {
      return (
        <>
          <ListHeader />
          <Text style={styles.appointmentText}>No Appointment to show</Text>
        </>
      )
  }
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  appointmentText: {
    padding: 30
  }
});

const mapStateToProps = state => ({
  dateFilter: getDateFilter(state),
  visibilityFilter: getVisibilityFilter(state),
  lastAppointments: getLastAppoinments(state),
  nextAppointments: getNextAppointments(state),
});

export default connect(mapStateToProps)(List);
