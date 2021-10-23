import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { addContact } from 'redux/contacts/contacts-operations';
import { getItems } from 'redux/contacts/contacts-selectors';

import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // useSelector вместо mapStateToProps
  const contacts = useSelector(getItems);

  const dispatch = useDispatch();

  console.log(name);

  const handleInputChange = event => {
    console.log(number);
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const doubleContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (doubleContact) {
      toast.error(`${name} is alredy in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    // onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formInputLabel}>
        Name
        <input
          className={css.formInput}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={css.formInputLabel}>
        Number
        <input
          className={css.formInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={css.formInputBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: data => dispatch(addContact(data)),
// });

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
