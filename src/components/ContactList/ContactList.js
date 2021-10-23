import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import ContactItem from 'components/ContactItem';
import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';

const ContactList = ({ contacts }) => {

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <ContactItem
            name={name}
            number={number}
            id={id}
            // onDelete={() => onDeleteContact(id)}
            onDelete={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
