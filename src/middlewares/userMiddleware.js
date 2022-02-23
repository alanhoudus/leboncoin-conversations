/* eslint-disable no-console */
import axios from 'axios';
import {
  getUserConversations,
  GET_USER_CONVERSATIONS,
  GET_USER_INFO,
  saveUserConversations,
  saveUserInfo,
} from '../actions/user';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_CONVERSATIONS:
      axios.get(
        // URL
        `http://localhost:3005/conversations/${action.id}`,
      )
        .then((conversations) => {
          console.log(conversations);
          store.dispatch(saveUserConversations(conversations.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case GET_USER_INFO:
      axios.get(
        // URL
        'http://localhost:3005/user/1',
      )
        .then((userInfo) => {
          store.dispatch(saveUserInfo(
            userInfo.data[0].nickname,
            userInfo.data[0].id,
          ));
          store.dispatch(getUserConversations(userInfo.data[0].id));
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
