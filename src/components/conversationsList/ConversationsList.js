// Imports
import PropTypes from 'prop-types';
import ConversationItem from './ConversationItem';

const ConversationsList = ({ userConversations }) => {
  console.log(userConversations);
  return (
    userConversations.map((conversation) => (
      <ConversationItem key={conversation.id} conversation={conversation} />
    ))
  );
};

ConversationsList.propTypes = {
  userConversations: PropTypes.arrayOf(
    PropTypes.shape({
      conversation: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default ConversationsList;
