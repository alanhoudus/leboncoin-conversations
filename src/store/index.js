import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers/reducer';
import logMiddleware from '../middlewares/logMiddleware';
import userMiddleware from '../middlewares/userMiddleware';
import messagesMiddleware from '../middlewares/messagesMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    userMiddleware,
    messagesMiddleware,
  ),
);
const store = createStore(reducer, enhancers);

export default store;
