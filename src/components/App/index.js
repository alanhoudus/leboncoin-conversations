// == Import
// hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// react-router-dom
import { Route, Routes } from 'react-router-dom';
// actions
import { getUserInfo, userDataLoaded } from '../../actions/user';
// components
import Conversations from '../conversationsList';
import Messages from '../messages';
// scss
import './styles.scss';

// == Composant
const App = () => {
  const userDataIsLoading = useSelector((state) => state.userProfile.userDataIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    dispatch(userDataLoaded());
  }, [userDataIsLoading]);

  if (userDataIsLoading) {
    return <div>Chargement ...</div>;
  }
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
