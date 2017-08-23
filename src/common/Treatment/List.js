import * as React from 'react';

import ListItem from './ListItem';
import ListHeader from './ListHeader';

/* =============================================================================
<List />
============================================================================= */
const List = ({data}) => {
  return (
    <>
      <ListHeader />

      {data.map(item => (
        <ListItem
          key={item.codeID}
          tooth={item.tooth}
          status={item.completed ? 'Done' : 'Pending'}
          description={item.description}
        />
      ))}
    </>
  );
};

export default List;
