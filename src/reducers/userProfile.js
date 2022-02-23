import { SAVE_USER_CONVERSATIONS } from '../actions/user';

export const initialState = {
  username: '',
  userConversations: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_CONVERSATIONS:
      return {
        ...state,
        userConversations: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
