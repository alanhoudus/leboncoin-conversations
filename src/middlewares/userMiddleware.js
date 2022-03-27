/* eslint-disable no-console */
import axios from 'axios';
import { START_NEW_CONVERSATION } from '../actions/messages';
import {
  getUserConversations,
  GET_USER_CONVERSATIONS,
  GET_USER_INFO,
  saveUserConversations,
  saveUserInfo,
} from '../actions/user';
import findUser from '../selectors/users';

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
    case START_NEW_CONVERSATION:
      axios.post(
        // URL
        `http://localhost:3005/conversation/${action.userId}`,
        {
          recipientId: store.getState().userProfile.userId,
          senderNickname: findUser(store.getState().users.usersList, action.userId),
          senderId: action.userId,
          recipientNickname: findUser(
            store.getState().users.usersList,
            store.getState().userProfile.userId,
          ),
          lastMessageTimestamp: Date.now(),
        },
      )
        .then((response) => {
          console.log(response);
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
