/**
 * Redux async action creator
 */
export const actionGenerator = actionName => ({
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAIL: `${actionName}_FAIL`,
  COMPLETE: `${actionName}_COMPLETE`,
  actionName,
});

/**
 * Normalize response from api for redux store
 */
export const normalize = (list, id = '_id') => {
  const byId = {};

  const allIds = [];

  for (let i = 0; i < list.length; i++) {
    byId[list[i][id]] = list[i];
    allIds.push(list[i][id]);
  }

  return {
    byId,
    allIds,
  };
};

/**
 * Add an element in state
 */
export const add = (state, payload) => {
  let byId = {...state.byId};

  let allIds = [...state.allIds];

  if (!byId[payload._id]) {
    allIds.push(payload._id);
    byId[payload._id] = payload;
  }

  return {
    ...state,
    byId,
    allIds,
  };
};

/**
 * Update an element in state
 */
export const update = (state, payload) => {
  let byId = {...state.byId};
  let allIds = [...state.allIds];

  if (!byId[payload._id]) {
    allIds.push(payload._id);

    byId[payload._id] = payload;
  } else {
    byId[payload._id] = {...byId[payload._id], ...payload};
  }

  return {
    ...state,
    byId,
    allIds,
  };
};

/**
 * Remove an element from state
 */
export const remove = (state, payload) => {
  if (state.byId[payload._id]) {
    let byId = {};
    const allIds = [];

    state.allIds.forEach(id => {
      if (id !== payload._id) {
        allIds.push(id);

        byId[id] = state.byId[id];
      }
    });

    return {
      ...state,
      byId,
      allIds,
    };
  } else {
    return state;
  }
};
