import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

/* =============================================================================
<ScheduledProcedures />
============================================================================= */
const ScheduledProcedures = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <View
          style={[
            styles.btn,
            data.description === 'Pending' ? styles.pending : styles.done,
          ]}>
          <Text style={styles.btnTxt}>{data.description}</Text>
        </View>
      </View>

      <Text style={styles.title}>Scheduled Procedures</Text>
      <Text key={data._id} style={styles.text}>
        {data.treatmentDescription}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 7,
  },
  title: {
    marginBottom: 8,
    fontSize: 10,
    color: '#C2C2C2',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 12,
    color: '#595959',
    fontFamily: 'Noah-Bold',
    textTransform: 'capitalize',
  },
  status: {
    marginBottom: 20,
    textAlign: 'right',
  },
  btn: {
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
  },
  done: {
    borderColor: '#AFEFF4',
    backgroundColor: '#AFEFF4',
  },
  pending: {
    borderColor: '#EFF4AF',
    backgroundColor: '#EFF4AF',
  },
  btnTxt: {
    fontSize: 9,
    color: '#000000',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default ScheduledProcedures;
