/* eslint-disable no-console */
import axios from 'axios';
import {
  GET_USERS_LIST,
  saveUsersList,
} from '../actions/users';

const usersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      axios.get(
        // URL
        'http://localhost:3005/users',
      )
        .then((users) => {
          console.log(users);
          store.dispatch(saveUsersList(users.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }
  next(action);
};

export default usersMiddleware;
