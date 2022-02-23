// Imports
// scss
import { useSelector } from 'react-redux';
import './conversations.scss';
import ConversationsList from './ConversationsList';

const Conversations = () => {
  const userConversations = useSelector((state) => state.userProfile.userConversations);

  return (
    <ConversationsList userConversations={userConversations} />
  );
};
export default Conversations;
