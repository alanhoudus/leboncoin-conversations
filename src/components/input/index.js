// == Import : local
import PropTypes from 'prop-types';

import './input.scss';

// == Composant
const Input = ({
  id,
  label,
  placeholder,
  className,
  type,
  value,
  name,
  onChange,
  minLength,
  required,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  return (
    <>
      {label && (<label htmlFor={id}>{label}</label>)}
      <input
        id={id}
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        minLength={minLength}
        onChange={handleChange}
        required={required}
      />
    </>
  );
};

Input.defaultProps = {
  id: '',
  label: '',
  onChange: null,
  value: '',
  placeholder: '',
  minLength: '0',
  required: '',
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  minLength: PropTypes.string,
  required: PropTypes.string,
};

// == Export
export default Input;
