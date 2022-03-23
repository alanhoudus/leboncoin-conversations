import {
  MESSAGES_LOADED,
  SAVE_CONVERSATION_MESSAGES,
  SEND_NEW_MESSAGE,
  UPDATED_FIELD_VALUE,
} from '../actions/messages';

export const initialState = {
  messagesAreLoading: true,
  messagesList: [],
  newMessageInput: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATED_FIELD_VALUE:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case SEND_NEW_MESSAGE:
      return {
        ...state,
        newMessageInput: '',
      };
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
