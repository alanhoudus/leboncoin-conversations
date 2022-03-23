// Imports
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

const MessagesList = ({ conversationMessages }) => {
  if (conversationMessages.length === 0) {
    return <div className="messages-none">Vous n'avez encore aucun message !</div>;
  }
  return (
    conversationMessages.map((message) => (
      <MessageItem key={message.id} message={message} />
    ))
  );
};

MessagesList.propTypes = {
  conversationMessages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default MessagesList;
