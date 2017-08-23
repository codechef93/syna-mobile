import * as React from 'react';

import { View, Treatment } from '../../common';

/* =============================================================================
<ListItem />
============================================================================= */
const ListItem = (data) => {
  if (data && data?.items?.length != 0)
    return (
      <View paddingVertical={6.5} paddingHorizontal={30}>
        <Treatment
          data={data}
        />
      </View>
    );
  return <></>
};

export default ListItem;
