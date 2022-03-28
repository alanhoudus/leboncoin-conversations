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
  const [startNewConvoIsDisplayed, setStartNewConvoIsDisplayed] = useState(false);

  return (
    <div className="conversationslist">
      <ConversationsList userConversations={userConversations} />
      {startNewConvoIsDisplayed
      && (
      <Modal
        isDisplayed={startNewConvoIsDisplayed}
        setIsDisplayed={setStartNewConvoIsDisplayed}
      />
      )}
      <MessageCircle
        size="60"
        color="black"
        className="conversationslist-new"
        onClick={() => {
          setStartNewConvoIsDisplayed(!startNewConvoIsDisplayed);
        }}
      />
    </div>
  );
};
export default Conversations;
