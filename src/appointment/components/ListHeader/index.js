import * as React from 'react';

import Title from './Title';
import Calendar from './Calendar';
import {Background} from '../../../common';
import TabBar from './TabBar';

/* =============================================================================
<ListHeader />
============================================================================= */
const ListHeader = () => {
  return (
    <>
      <Title />

      <Background />

      <Calendar />

      <TabBar />
    </>
  );
};

export default ListHeader;
