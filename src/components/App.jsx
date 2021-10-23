import React, { useState } from 'react';

import { Toaster } from 'react-hot-toast';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Container from './Container';
import Filter from './Filter';
import { useFetchContactsQuery } from 'redux/contacts/contacts-slice';

export default function App() {

    const { data, isFetching } = useFetchContactsQuery();

    const [filter, setFilter] = useState('');

    const changeFilter = event => {
        setFilter(event.currentTarget.value);
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return data.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    return (
        <Container>
            <Toaster/>
            <h1>Phonebook</h1>
            <ContactForm contacts={data}></ContactForm>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter}></Filter>
            {isFetching && <p>Loading...</p>}
            {data && <ContactList contacts={getVisibleContacts()} />}
        </Container>
    )
}
