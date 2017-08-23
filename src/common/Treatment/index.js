import * as React from 'react';

import List from './List';
import Card from '../Card';
import Header from './Header';

/* =============================================================================
<Treatment />
============================================================================= */
const Treatment = ({ data }) => {
  var accomplishAt = 0;
  var result = data.items.filter(item => item.completed); 
  var accomplishAt = (result.length * 100) / data.items.length
  return (
    <Card>
      <Header data={data} items={data.items} accomplishAt={Math.round(accomplishAt)} />
      <List data={data.items} />
    </Card>
  );
};

export default Treatment;
