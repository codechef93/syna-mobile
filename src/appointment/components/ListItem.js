import * as React from 'react';

import {View, Appointment} from '../../common';
import Item from '../../common/BottomTab/Item';

/* =============================================================================
<ListItem />
============================================================================= */
const ListItem = (data) => {
  return (
    <View key={'1222'} paddingVertical={4} paddingHorizontal={30}>
      <Appointment
        data={data}
      />
    </View>
  );
};

export default ListItem;
