// imports

// proptypes
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Message = ({ message }) => {
  const currentUserId = useSelector((state) => state.userProfile.userId);
  const author = message.authorId === currentUserId ? 'recipient' : 'sender';

  return (
    <div className={`messages-${author}`}>
      <div className={`messages-${author}--name`}>{message.authorId}</div>
      <div className={`messages-${author}--message`}>{message.body}</div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    timestamp: PropTypes.number.isRequired,
    conversationId: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
  }).isRequired,
};

export default Message;
