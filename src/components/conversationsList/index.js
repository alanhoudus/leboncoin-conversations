// Imports
// hooks
import { useState } from 'react';
import { MessageCircle } from 'react-feather';
import { useSelector } from 'react-redux';
import Modal from '../modal';
// scss
import './conversations.scss';
// components
import ConversationsList from './ConversationsList';

const Conversations = () => {
  const userConversations = useSelector((state) => state.userProfile.userConversations);
  const [startNewConvoIsDisplayed, setStarNewConvoIsDisplayed] = useState(false);

  return (
    <div className="conversationslist">
      <ConversationsList userConversations={userConversations} />
      {startNewConvoIsDisplayed
      && (
      <Modal
        isDisplayed={startNewConvoIsDisplayed}
        setIsDisplayed={setStarNewConvoIsDisplayed}
      />
      )}
      <MessageCircle
        size="60"
        color="white"
        className="conversationslist-new"
        onClick={() => {
          setStarNewConvoIsDisplayed(!startNewConvoIsDisplayed);
        }}
      />
    </div>
  );
};
export default Conversations;
