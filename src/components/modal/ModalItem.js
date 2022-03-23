// imports
// proptypes
import PropTypes from 'prop-types';

const ModalItem = ({ user }) => (
  <div className="modal-item">
    {user.nickname}
  </div>
);

ModalItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalItem;
