import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   addContactError,
//   addContactRequest,
//   addContactSuccess,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// } from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    const contact = {
      name,
      number,
    };
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// without createAsyncChunk

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }

//   // axios
//   //     .get('/contacts')
//   //     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//   //     .catch(error => dispatch(fetchContactsError(error)));
// };

// export const addContact =
//   ({ name, number }) =>
//   async dispatch => {
//     const contact = {
//       name,
//       number,
//     };

//     dispatch(addContactRequest());

//     try {
//       const { data } = await axios.post('/contacts', contact);
//       dispatch(addContactSuccess(data));
//     } catch (error) {
//       dispatch(addContactError(error));
//     }

//     // axios
//     //     .post('/contacts', contact)
//     //     .then(({ data }) =>
//     //         dispatch(addContactSuccess(data)),
//     //     )
//     //     .catch(error =>
//     //         dispatch(addContactError(error))
//     //     );
//   };

// export const deleteContact = contactId => async dispatch => {
//   dispatch(deleteContactRequest());

//   try {
//     await axios.delete(`/contacts/${contactId}`);
//     dispatch(deleteContactSuccess(contactId));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }

//   // axios
//   //     .delete(`/contacts/${contactId}`)
//   //     .then(() => dispatch(deleteContactSuccess(contactId)))
//   //     .catch(error => dispatch(deleteContactError(error)));
// };
