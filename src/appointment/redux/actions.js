import * as constants from './constants';

export const setDateFilter = payload => ({
  type: constants.SET_DATE_FILTER,
  payload,
});

export const setVisibilityFilter = payload => ({
  type: constants.SET_VISIBILITY_FILTER,
  payload,
});

export const setNextAppointment = payload => ({
  type: constants.SET_NEXT_APPOINTMENT,
  payload,
});

export const setLastAppointment = payload => ({
  type: constants.SET_LAST_APPOINTMENT,
  payload,
});
