import * as React from 'react';
import moment from 'moment';
import {Text, StyleSheet} from 'react-native';

/* =============================================================================
<Title />
============================================================================= */
const Title = ({date}) => {
  const _day = moment(date).date();
  const _time = moment().format('h:mm a');
  const _month = moment(date).format('MMMM');
  const _year = moment(date).format('YYYY');

  return (
    <>
      <Text style={styles.date}>{`${_day}. ${_month} ${_year}`}</Text>

      {/* <Text style={styles.time}>@ {_time}</Text> */}
    </>
  );
};

const styles = StyleSheet.create({
  date: {
    fontSize: 20,
    color: '#595959',
    fontFamily: 'Noah-Bold',
  },
  time: {
    fontSize: 12,
    color: '#595959',
    fontFamily: 'Noah-Bold',
  },
});

export default Title;
