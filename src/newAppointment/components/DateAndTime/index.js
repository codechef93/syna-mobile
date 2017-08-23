import React, {useState} from 'react';
import {connect} from 'react-redux';

import Time from './Time';
import Button from '../Button';
import Calendar from './Calendar';
import STATIC_DATA from '../../static/data.json';
import {setDateTime as setDateTimeAction} from '../../redux/actions';

/* =============================================================================
<DateAndTime />
============================================================================= */
const DateAndTime = ({setDateTime, onSubmit}) => {
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  const _handleSubmit = () => {
    setDateTime({
      date,
      time,
    });

    onSubmit();
  };

  return (
    <>
      <Calendar data={STATIC_DATA.dates} value={date} onChange={setDate} />

      <Time data={STATIC_DATA.time} value={time} onChange={setTime} />

      <Button label="continue" onPress={_handleSubmit} />
    </>
  );
};

const mapDispatchToProps = {
  setDateTime: setDateTimeAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(DateAndTime);
