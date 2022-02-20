import PropTypes from 'prop-types';

const Conversation = ({ conversation }) => (
  <div className="conversation">
    <div className="conversation-avatar">{conversation.recipientNickname.slice(0, 1)}</div>
    <div className="conversation-infos">
      <div className="conversation-infos--name">Conversation avec {conversation.recipientNickname}</div>
      <div className="conversation-infos--date">{conversation.lastMessageTimestamp}</div>
    </div>
  </div>
);

Conversation.propTypes = {
  conversation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    lastMessageTimestamp: PropTypes.number.isRequired,
    recipientId: PropTypes.number.isRequired,
    recipientNickname: PropTypes.string.isRequired,
    senderId: PropTypes.number.isRequired,
    senderNickname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Conversation;
