// Imports
import PropTypes from 'prop-types';
import ModalItem from './ModalItem';

const ModalList = ({ usersList }) => {
  if (usersList.length === 0) {
    return <div className="messages-none">Il n'y a pas d'autres utilisateurs !</div>;
  }
  return (
    usersList.map((user) => (
      <ModalItem key={user.id} user={user} />
    ))
  );
};

ModalList.propTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default ModalList;
