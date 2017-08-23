import * as constants from './constants';

/**
 * LOGIN
 */
export const login = payload => ({
  type: constants.LOGIN,
  payload,
});

/**
 * LOGOUT
 */
export const logout = payload => ({
  type: constants.LOGOUT,
  payload,
});

/**
 * SET_TREATMENTS
 */
export const setTreatments = payload => ({
  type: constants.SET_TREATMENTS,
  payload,
});