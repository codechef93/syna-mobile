import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Card from '../Card';
import Title from './Title';
import PrescriptionReport from './PrescriptionReport';
import ScheduledProcedures from './ScheduledProcedures';

/* =============================================================================
<Appointment />
============================================================================= */
const Appointment = ({ data }) => {
  console.log('data');
  console.log(data);
  return (
    <View style={styles.container}>
      <Card>
        <Title date={data.apptDateTime} />
        {data.treatmentDescription ? <ScheduledProcedures data={data} /> : null}
        <PrescriptionReport />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15
  },
});

export default Appointment;
