import * as React from 'react';
import moment from 'moment';
import { View, Text, StyleSheet } from 'react-native';

/* =============================================================================
<Header />
============================================================================= */
const Header = ({ data, items, accomplishAt = 0 }) => {
  const _date = moment(data.creationDate).format('LL');

  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        <Text style={styles.title}>TP{data.idNumber}</Text> {_date}
      </Text>

      <View>
        <Text style={styles.accomplishAt}>accomplish at</Text>
        <Text style={styles.percentage}>{accomplishAt}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  date: {
    fontSize: 12,
    color: '#595959',
    fontFamily: 'Noah-Bold',
  },
  title: {
    fontSize: 17,
    fontFamily: 'Noah-Bold',
  },
  accomplishAt: {
    fontSize: 10,
    color: '#C2C2C2',
    textAlign: 'right',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
  percentage: {
    fontSize: 12,
    color: '#595959',
    textAlign: 'right',
    fontFamily: 'Noah-Bold',
  },
});

export default Header;
