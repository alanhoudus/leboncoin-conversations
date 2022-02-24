import { MESSAGES_LOADED, SAVE_CONVERSATION_MESSAGES } from '../actions/messages';

export const initialState = {
  messagesAreLoading: true,
  messagesList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MESSAGES_LOADED:
      return {
        ...state,
        messagesAreLoading: false,
      };
    case SAVE_CONVERSATION_MESSAGES:
      return {
        ...state,
        messagesList: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
