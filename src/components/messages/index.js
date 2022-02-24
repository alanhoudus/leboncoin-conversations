// imports
// hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// react-router-dom
import { useParams } from 'react-router-dom';
// actions
import { getConversationMessages } from '../../actions/messages';

// components
import MessagesList from './MessagesList';
// scss
import './messages.scss';

const Messages = () => {
  const conversationMessages = useSelector((state) => state.messages.messagesList);
  const messagesAreLoading = useSelector((state) => state.messages.messagesAreLoading);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversationMessages(id));
  }, []);

  if (messagesAreLoading) {
    return <div>Les messages chargent...</div>;
  }
  return (
    <div className="messages">
      <MessagesList conversationMessages={conversationMessages} />
    </div>
  );
};
export default Messages;
