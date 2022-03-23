// == Import : local
import { XCircle } from 'react-feather';
import PropTypes from 'prop-types';

// scss
import './modal.scss';

// == Composant
const Modal = ({ setIsDisplayed, isDisplayed }) => (
  <div className="modal">
    <XCircle
      className="modal-close"
      size="50"
      color="white"
      onClick={() => {
        setIsDisplayed(!isDisplayed);
      }}
    />
    Liste des contacts
  </div>
);

Modal.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  setIsDisplayed: PropTypes.func.isRequired,

};

// == Export
export default Modal;
