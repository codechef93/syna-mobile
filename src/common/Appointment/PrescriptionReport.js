import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

import Button from '../Button';

/* =============================================================================
<PrescriptionReport />
============================================================================= */
const PrescriptionReport = () => {
  const _handleDownload = () => {};

  return (
    <>
      {/* <Text style={styles.title}>Prescription Report</Text>

      <Button
        rounded
        width={110}
        height={23}
        fontSize={9}
        color="#000"
        title="Download"
        paddingVertical={0}
        borderColor="#AFEFF4"
        backgroundColor="#AFEFF4"
        onPress={_handleDownload}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
    fontSize: 10,
    color: '#C2C2C2',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default PrescriptionReport;
