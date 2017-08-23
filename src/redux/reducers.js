import {combineReducers} from 'redux';

import AuthReducer from '../auth/redux/reducer';
import AppointmentReducer from '../appointment/redux/reducer';
import NewAppointmentReducer from '../newAppointment/redux/reducer';

/* ============================================================================
  Combine ALl Reducers
============================================================================= */
const rootReducer = combineReducers({
  Auth: AuthReducer,
  Appointment: AppointmentReducer,
  NewAppointment: NewAppointmentReducer,
});

export default rootReducer;
