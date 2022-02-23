// == Import
// hooks
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// react-router-dom
import { Route, Routes } from 'react-router-dom';
// actions
import { getUserConversations } from '../../actions/user';
// components
import Conversations from '../conversationsList';
import Messages from '../messages';
// scss
import './styles.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserConversations());
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" key="conversations" element={<Conversations />} />
        <Route path="/messages" key="messages" element={<Messages />} />
      </Routes>
    </div>
  );
};
// == Export
export default App;
