import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';

import {View, Text} from '../../../common';
import {getDateTime} from '../../redux/selectors';

/* =============================================================================
<DateAndTime />
============================================================================= */
const DateAndTime = ({dateTime}) => {
  const day = dateTime.date && moment(dateTime.date).date();
  const month = dateTime.date && moment(dateTime.date).format('MMMM');

  return (
    <>
      <View paddingVertical={10} paddingHorizontal={30}>
        <Text style={styles.label}>date</Text>

        <Text style={styles.value}>
          {day}.{month}
        </Text>
      </View>

      <View paddingVertical={10} paddingHorizontal={30}>
        <Text style={styles.label}>time</Text>

        <Text style={styles.value}>{dateTime.time}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    color: '#C2C2C2',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
  value: {
    marginTop: 3,
    fontSize: 20,
    color: '#595959',
    fontFamily: 'Noah-Bold',
    textTransform: 'capitalize',
  },
});

const mapStateToProps = state => ({
  dateTime: getDateTime(state),
});

export default connect(mapStateToProps)(DateAndTime);
