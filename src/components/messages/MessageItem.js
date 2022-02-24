// imports
// hooks
import { useSelector } from 'react-redux';
// proptypes
import PropTypes from 'prop-types';
// selectors
import findUser from '../../selectors/users';

const Message = ({ message }) => {
  const currentUserId = useSelector((state) => state.userProfile.userId);
  const usersList = useSelector((state) => state.users.usersList);
  const username = findUser(usersList, message.authorId);
  const author = message.authorId === currentUserId ? 'recipient' : 'sender';

  return (
    <div className={`messages-${author}`}>
      <div className={`messages-${author}--name`}>{username}</div>
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
