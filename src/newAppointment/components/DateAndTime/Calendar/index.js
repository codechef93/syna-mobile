import React, {useState} from 'react';

import List from './List';
import Days from './Days';
import Months from './Months';
import {View} from '../../../../common';

/* =============================================================================
<Calendar />
============================================================================= */
const Calendar = ({data, value, onChange}) => {
  const [month, setMonth] = useState(0);

  return (
    <View>
      <Days />

      <List
        month={month}
        selected={value}
        activeDates={data}
        onItemPress={onChange}
      />

      <Months selected={month} onPress={setMonth} />
    </View>
  );
};

export default Calendar;
