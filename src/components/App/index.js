// == Import
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserConversations } from '../../actions/user';
import Conversations from '../conversationsList';
import './styles.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserConversations());
  }, []);

  return (
    <div className="app">
      <Conversations />
    </div>
  );
};
// == Export
export default App;
