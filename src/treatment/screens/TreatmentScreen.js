import * as React from 'react';
import List from '../components/List';
import { Container, SafeAreaView } from '../../common';
import { useSelector } from 'react-redux'
/* =============================================================================
<TreatmentScreen />
============================================================================= */
const TreatmentScreen = () => {
  const treatments = useSelector(state => state.Auth.treatments)
  return (
    <SafeAreaView>
      <Container backgroundColor="#fff">
        <List data={treatments && treatments.length == 0 ? null : treatments} />
      </Container>
    </SafeAreaView>
  );
};

export default TreatmentScreen;
