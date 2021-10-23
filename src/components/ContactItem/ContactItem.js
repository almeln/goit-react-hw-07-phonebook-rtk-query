import React from 'react';
import PropTypes from 'prop-types';


import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <p>
        <span className={css.contactItemName}>{name}:</span>
        <span className={css.contactItemNumber}>{number}</span>
        <button type="button" className={css.deleteBtn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </p>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
