// imports
// react-router-dom
import { Link } from 'react-router-dom';
// hooks
import { useSelector } from 'react-redux';
// proptypes
import PropTypes from 'prop-types';
// selectors
import timestampToDate from '../../selectors/messages';

const ConversationItem = ({ conversation }) => {
  const activeUserId = useSelector((state) => state.userProfile.userId);
  console.log(conversation);
  return (
    <Link
      to={`/messages/${conversation.id}`}
      key={conversation.id}
    >
      <div className="conversation">
        <div className="conversation-avatar">{activeUserId === conversation.recipientId ? conversation.senderNickname.slice(0, 1) : conversation.recipientNickname.slice(0, 1)}</div>
        <div className="conversation-infos">
          <div className="conversation-infos--name">Conversation avec {activeUserId === conversation.recipientId ? conversation.senderNickname : conversation.recipientNickname}</div>
          <div className="conversation-infos--date">Dernier message le {timestampToDate(conversation.lastMessageTimestamp)}</div>
        </div>
      </div>
    </Link>
  );
};

ConversationItem.propTypes = {
  conversation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    lastMessageTimestamp: PropTypes.number.isRequired,
    recipientId: PropTypes.number.isRequired,
    recipientNickname: PropTypes.string.isRequired,
    senderId: PropTypes.number.isRequired,
    senderNickname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ConversationItem;
