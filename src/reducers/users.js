import { SAVE_USERS_LIST } from '../actions/users';

export const initialState = {
  usersList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USERS_LIST:
      return {
        ...state,
        usersList: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
