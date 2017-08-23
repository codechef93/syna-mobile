import * as React from 'react';
import {connect,useSelector} from 'react-redux';

import List from './List';
import Days from './Days';
import Months from './Months';
import {View} from '../../../../common';
import {getDateFilter} from '../../../redux/selectors';
import {setDateFilter as setDateFilterAction} from '../../../redux/actions';
import {activeDates} from '../../../static/data.json';

/* =============================================================================
<Calendar />
============================================================================= */
const Calendar = ({dateFilter, setDateFilter}) => {
  const [month, setMonth] = React.useState(0);
  const allAppointment = useSelector(state => state.Appointment.nextAppointments)
  
  return (
    <View>
      <Months selected={month} onPress={setMonth} />

      <Days />

      <List
        month={month}
        selected={dateFilter}
        activeDates={activeDates}
        onItemPress={setDateFilter}
        markedDates={allAppointment?.map(item => item.apptDateTime)}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  dateFilter: getDateFilter(state),
});

const mapDispatchToProps = {
  setDateFilter: setDateFilterAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);
