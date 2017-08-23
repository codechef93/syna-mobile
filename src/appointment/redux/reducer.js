import * as constants from './constants';

export const INITIAL_STATE = {
  dateFilter: null,
  visibilityFilter: 'next',
  nextAppointments:[],
  lastAppointments:[]
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    // SET_VISIBILITY_FILTER
    case constants.SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: payload,
      };

    // SET_DATE_FILTER
    case constants.SET_DATE_FILTER:
      return {
        ...state,
        dateFilter: payload,
      };
      // SET_NEXT_APPOINTMENT
      case constants.SET_NEXT_APPOINTMENT:
        return {
          ...state,
          nextAppointments: payload,
        };
  
      // SET_LAST_APPOINTMENT
      case constants.SET_LAST_APPOINTMENT:
        return {
          ...state,
          lastAppointments: payload,
        };

    default:
      return state;
  }
}
