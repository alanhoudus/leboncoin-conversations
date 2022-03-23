// == Import : local
// react-feather
import { XCircle } from 'react-feather';
// proptypes
import PropTypes from 'prop-types';
// hooks
import { useSelector } from 'react-redux';
// scss
import './modal.scss';
// components
import ModalList from './ModalList';

// == Composant
const Modal = ({ setIsDisplayed, isDisplayed }) => {
  const usersList = useSelector((state) => state.users.usersList);
  return (
    <div className="modal">
      <XCircle
        className="modal-close"
        size="50"
        color="white"
        onClick={() => {
          setIsDisplayed(!isDisplayed);
        }}
      />
      <ModalList usersList={usersList} />
    </div>
  );
};

Modal.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  setIsDisplayed: PropTypes.func.isRequired,

};

// == Export
export default Modal;
