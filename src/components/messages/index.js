// imports
// hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// react-router-dom
import { useParams } from 'react-router-dom';
// actions
import { getConversationMessages, sendNewMessage, updateFieldValue } from '../../actions/messages';
// components
import MessagesList from './MessagesList';
import Input from '../input';
// scss
import './messages.scss';

const Messages = () => {
  const conversationMessages = useSelector((state) => state.messages.messagesList);
  const messagesAreLoading = useSelector((state) => state.messages.messagesAreLoading);
  const newMessageInput = useSelector((state) => state.messages.newMessageInput);
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(sendNewMessage(id, newMessageInput));
        }}
      >
        <Input
          className="messages-input"
          type="text"
          name="newMessageInput"
          id="newMessageInput"
          placeholder="Envoyer un message..."
          value={newMessageInput}
          onChange={(newValue, identifier) => {
            const action = updateFieldValue(identifier, newValue);
            dispatch(action);
          }}
        />
      </form>
    </div>
  );
};
export default Messages;
