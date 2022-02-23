import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <div className="messages-sender">
    <div className="messages-sender--name">Jean</div>
    <div className="messages-sender--message">Premier message de la conversation</div>
  </div>
);

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    lastMessageTimestamp: PropTypes.number.isRequired,
    recipientId: PropTypes.number.isRequired,
    recipientNickname: PropTypes.string.isRequired,
    senderId: PropTypes.number.isRequired,
    senderNickname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
