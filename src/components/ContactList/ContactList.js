import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';

import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <ContactItem
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
