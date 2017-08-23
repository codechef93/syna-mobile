import React, {useState, useEffect} from 'react';

import ListItem from './ListItem';
import {View} from '../../../../common';

const daysInMonth = (iMonth, iYear) => {
  return 32 - new Date(iYear, iMonth, 32).getDate();
};

/* =============================================================================
<List />
============================================================================= */
var getDaysArray = function(start, end) {
  for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
      arr.push(new Date(dt));
  }
  return arr;
};
var d1 = new Date(
  new Date().getFullYear(),
  new Date().getMonth(), 
  new Date().getDate()+1
);
var d2 = new Date(
  new Date().getFullYear()+1,
  new Date().getMonth(), 
  new Date().getDate()
);

const List = ({month, year, activeDates, selected, onItemPress}) => {
  const [rows, setRows] = useState([]);
  var daylist = getDaysArray(d1,d2);

  // Generate calendar
  useEffect(() => {
    let firstDay = new Date(year, month).getDay();

    // clearing all previous cells
    setRows([]);

    // creating all cells
    let date = 1;

    const _rows = [];

    for (let i = 0; i < 6; i++) {
      // creates a table row
      let row = [];

      //creating individual cells, filing them up with data.
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          row.push({});
        } else if (date > daysInMonth(month, year)) {
          break;
        } else {
          const cell = {
            value: date,
          };

          // Set available dates for appointments
          daylist.forEach(item => {
            const activeDate = new Date(item);
            if (
              date === activeDate.getDate() &&
              year === activeDate.getFullYear() &&
              month === activeDate.getMonth()
            ) {
              cell.date = item;
              cell.active = true;
            }
          });

          row.push(cell);

          date++;
        }
      }

      if (row.length < 7 && row.length > 0) {
        for (let k = row.length; k < 7; k++) {
          row.push({});
        }
      }

      _rows.push(row);
    }

    setRows(_rows);
  }, [month, year, activeDates]);

  return (
    <View paddingHorizontal={30}>
      {rows.map((row, index1) => (
        <View key={index1} horizontal>
          {row.map((item, index2) => (
            <ListItem
              {...item}
              key={index2}
              selected={selected}
              onPress={onItemPress}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

List.defaultProps = {
  year: new Date().getFullYear(),
};

export default List;
