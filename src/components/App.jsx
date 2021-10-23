import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Container from './Container';
import Filter from './Filter';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchContacts()), [dispatch]);

    // const [contacts, setContacts] = useState([
    //     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    //     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    //     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    //     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    // ]);

    // const [filter, setFilter] = useState('');

    // useEffect(() => {
    //     const contacts = localStorage.getItem('contacts');
    //     const parsedContacts = JSON.parse(contacts);
    //     if (parsedContacts) {
    //         console.log(parsedContacts);
    //         setContacts(parsedContacts);
    //     };
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem('contacts', JSON.stringify(contacts));
    // }, [contacts]);

    // const formSubmitHandler = (data) => {
    //     // Добавление контакта
    //     const contact = {
    //         id: uuidv4(),
    //         name: data.name,
    //         number: data.number,
    //     };

    //     // Проверка на дублирование имени
    //     const doubleContact = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
        
    //     if (doubleContact) {
    //         toast.error(`${data.name} is alredy in contacts.`);
    //         return;
    //     };

    //     setContacts([contact, ...contacts]);
    // };

    // const changeFilter = event => {
    //     setFilter(event.currentTarget.value);
    // };

    // const getVisibleContacts = () => {
    //     const normalizedFilter = filter.toLowerCase();
    //     return contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(normalizedFilter),
    //     );
    // };

    // const deleteContact = (contactId) => {
    //     setContacts(contacts.filter(contact => contact.id !== contactId));
    // };

    return (
        <Container>
            <Toaster/>
            <h1>Phonebook</h1>
            <ContactForm></ContactForm>
            {/* <ContactForm onSubmit={formSubmitHandler}></ContactForm> */}
            <h2>Contacts</h2>
            <Filter></Filter>
            <ContactList></ContactList>
        </Container>
    )
}



// export default function App() {
//     const [contacts, setContacts] = useState([
//         {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//         {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//         {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//         {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ]);

//     const [filter, setFilter] = useState('');

//     useEffect(() => {
//         const contacts = localStorage.getItem('contacts');
//         const parsedContacts = JSON.parse(contacts);
//         if (parsedContacts) {
//             console.log(parsedContacts);
//             setContacts(parsedContacts);
//         };
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('contacts', JSON.stringify(contacts));
//     }, [contacts]);

//     const formSubmitHandler = (data) => {
//         // Добавление контакта
//         const contact = {
//             id: uuidv4(),
//             name: data.name,
//             number: data.number,
//         };

//         // Проверка на дублирование имени
//         const doubleContact = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
        
//         if (doubleContact) {
//             toast.error(`${data.name} is alredy in contacts.`);
//             return;
//         };

//         setContacts([contact, ...contacts]);
//     };

//     const changeFilter = event => {
//         setFilter(event.currentTarget.value);
//     };

//     const getVisibleContacts = () => {
//         const normalizedFilter = filter.toLowerCase();
//         return contacts.filter(contact =>
//             contact.name.toLowerCase().includes(normalizedFilter),
//         );
//     };

//     const deleteContact = (contactId) => {
//         setContacts(contacts.filter(contact => contact.id !== contactId));
//     };

//     return (
//         <Container>
//             <Toaster/>
//             <h1>Phonebook</h1>
//             <ContactForm onSubmit={formSubmitHandler}></ContactForm>
//             <h2>Contacts</h2>
//             <Filter value={filter} onChange={changeFilter}></Filter>
//             <ContactList 
//                 contacts={getVisibleContacts()}
//                 onDeleteContact={deleteContact}
//             ></ContactList>
//         </Container>
//     )
// }

