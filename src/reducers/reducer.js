import { combineReducers } from 'redux';

import userProfileReducer from './userProfile';
import messagesReducer from './messages';

const rootReducer = combineReducers({
  userProfile: userProfileReducer,
  messages: messagesReducer,
});

export default rootReducer;
