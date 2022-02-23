// Imports
import PropTypes from 'prop-types';
import ConversationItem from './ConversationItem';

const ConversationsList = ({ userConversations }) => (
  userConversations.map((conversation) => (
    <ConversationItem key={conversation.id} conversation={conversation} />
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
