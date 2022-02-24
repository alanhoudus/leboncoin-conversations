// Imports
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

const MessagesList = ({ conversationMessages }) => (
  conversationMessages.map((message) => (
    <MessageItem key={message.id} message={message} />
  ))
);

MessagesList.protoTypes = {
  conversationMessages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default MessagesList;
