/* eslint-disable no-console */
import axios from 'axios';
import { GET_USER_CONVERSATIONS, saveUserConversations } from '../actions/user';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_CONVERSATIONS:
      axios.get(
        // URL
        'http://localhost:3005/conversations/1',
      )
        .then((conversations) => {
          console.log(conversations);
          store.dispatch(saveUserConversations(conversations.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};

export default logMiddleware;
