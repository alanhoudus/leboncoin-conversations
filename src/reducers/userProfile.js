import { SAVE_USER_CONVERSATIONS, SAVE_USER_INFO, USER_DATA_LOADED } from '../actions/user';

export const initialState = {
  userId: '',
  username: '',
  userConversations: [],
  userDataIsLoading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_CONVERSATIONS:
      return {
        ...state,
        userConversations: action.data,
      };
    case USER_DATA_LOADED:
      return {
        ...state,
        userDataIsLoading: false,
      };
    case SAVE_USER_INFO:
      return {
        ...state,
        username: action.username,
        userId: action.id,
      };
    default:
      return state;
  }
};

export default reducer;
