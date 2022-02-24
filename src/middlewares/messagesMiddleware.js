/* eslint-disable no-console */
import axios from 'axios';
import {
  GET_CONVERSATION_MESSAGES,
  messagesLoaded,
  saveConversationMessages,
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

    default:
  }
  next(action);
};

export default messagesMiddleware;
