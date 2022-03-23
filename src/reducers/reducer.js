import { combineReducers } from 'redux';

import userProfileReducer from './userProfile';
import messagesReducer from './messages';
import usersReducer from './users';

const rootReducer = combineReducers({
  userProfile: userProfileReducer,
  messages: messagesReducer,
  users: usersReducer,
});

export default rootReducer;
