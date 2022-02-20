// Imports
import PropTypes from 'prop-types';
import Conversation from './Conversation';

const ConversationsList = ({ userConversations }) => (
  userConversations.map((conversation) => (
    <Conversation key={conversation.id} conversation={conversation} />
  ))
);

ConversationsList.protoTypes = {
  userConversations: PropTypes.arrayOf(
    PropTypes.shape({
      conversation: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default ConversationsList;
