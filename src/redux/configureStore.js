import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';

const getMiddleware = () => {
  const middleware = [reduxThunk];

  return applyMiddleware(...middleware);
};

const appReducer = (state, action) => {
  let newState = state;

  if (action.type === 'LOGOUT') {
    newState = undefined;
  }

  return rootReducer(newState, action);
};

export default () => {
  let store = createStore(appReducer, getMiddleware());
  return store;
};
