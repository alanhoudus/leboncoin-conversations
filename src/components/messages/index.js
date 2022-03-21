// imports
// hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// react-feather
import { Send, ArrowLeft } from 'react-feather';
// react-router-dom
import { useParams, Link } from 'react-router-dom';
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
      <Link
        to="/"
      >
        <ArrowLeft
          size="34"
        />
      </Link>
      <MessagesList conversationMessages={conversationMessages} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(sendNewMessage(id, newMessageInput));
        }}
      >
        <div
          className="messages-input"
        >
          <Input
            className="messages-input--text"
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
          <Send
            className="messages-input--icon"
            color="plum"
            size="26"
          />
        </div>
      </form>
    </div>
  );
};
export default Messages;
