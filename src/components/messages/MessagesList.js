// Imports
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

const MessagesList = ({ userMessages }) => (
  userMessages.map((message) => (
    <MessageItem key={message.id} message={message} />
  ))
);

MessagesList.protoTypes = {
  userMessages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default MessagesList;
