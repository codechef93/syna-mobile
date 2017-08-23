import * as constants from './constants';

/**
 * TOGGLE_VISIBILITY
 */
export const toggleVisibility = () => ({
  type: constants.TOGGLE_VISIBILITY,
});

/**
 * SET_DATE_TIME
 */
export const setDateTime = payload => ({
  type: constants.SET_DATE_TIME,
  payload,
});

/**
 * SET_SERVICES
 */
export const setServices = payload => ({
  type: constants.SET_SERVICES,
  payload,
});
/**
 * ALL_SERVICES
 */
export const setAllServices = payload => ({
  type: constants.ALL_SERVICES,
  payload,
});