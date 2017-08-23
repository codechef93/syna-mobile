import * as constants from './constants';

export const INITIAL_STATE = {
  visible: false,
  dateTime: {},
  services: [],
  allServices:[],
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    // LOGIN
    case constants.TOGGLE_VISIBILITY:
      return {
        ...state,
        visible: !state.visible,
      };

    // SET_DATE_TIME
    case constants.SET_DATE_TIME:
      return {
        ...state,
        dateTime: payload,
      };

    // SET_SERVICES
    case constants.SET_SERVICES:
      return {
        ...state,
        services: payload,
      };

      // ALL_SERVICES
      case constants.ALL_SERVICES:
        return {
          ...state,
          allServices: payload,
        };

    default:
      return state;
  }
}
