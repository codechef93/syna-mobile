import * as React from 'react';

import List from '../components/List';
import {Container, SafeAreaView} from '../../common';

/* =============================================================================
<AppointmentScreen />
============================================================================= */
const AppointmentScreen = () => {
  return (
    <SafeAreaView>
      <Container backgroundColor="#fff">
        <List />
      </Container>
    </SafeAreaView>
  );
};

export default AppointmentScreen;
