import * as constants from './constants';

export const INITIAL_STATE = {
  user: null,
  authenticating: true,
  treatments:[]
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    // LOGIN
    case constants.LOGIN:
      return {
        ...state,
        user: payload,
        authenticating: false,
      };

    // LOGOUT
    case constants.LOGOUT:
      return {
        ...state,
        user: null,
        treatments:null,
        authenticating: false,
      };

    // SET_TREATMENTS
    case constants.SET_TREATMENTS:
      return {
        ...state,
        treatments: payload,
      };

    default:
      return state;
  }
}
