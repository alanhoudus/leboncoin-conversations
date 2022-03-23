/* eslint-disable no-console */
import axios from 'axios';
import {
  getConversationMessages,
  GET_CONVERSATION_MESSAGES,
  messagesLoaded,
  saveConversationMessages,
  SEND_NEW_MESSAGE,
} from '../actions/messages';

const messagesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CONVERSATION_MESSAGES:
      axios.get(
        // URL
        `http://localhost:3005/messages/${action.id}`,
      )
        .then((messages) => {
          console.log(messages);
          store.dispatch(saveConversationMessages(messages.data));
          store.dispatch(messagesLoaded());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SEND_NEW_MESSAGE:
      axios.post(
        // URL
        `http://localhost:3005/messages/${action.id}`,
        {
          body: action.newMessage,
          timestamp: Date.now(),
          conversationId: parseInt(action.id),
          authorId: store.getState().userProfile.userId,
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(getConversationMessages(action.id));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};

export default messagesMiddleware;
