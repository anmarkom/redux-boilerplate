import * as actions from './actions';

const reducer = (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case actions.INITIALIZATIONS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
