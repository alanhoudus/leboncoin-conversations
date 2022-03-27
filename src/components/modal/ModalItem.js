// imports
// proptypes
import PropTypes from 'prop-types';
// hooks
import { useDispatch } from 'react-redux';
// actions
import { startNewConversation } from '../../actions/messages';

const ModalItem = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="modal-item"
      onClick={() => {
        dispatch(startNewConversation(user.id));
      }}
    >
      {user.nickname}
    </div>
  );
};

ModalItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalItem;
