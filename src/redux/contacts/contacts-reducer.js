import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import {
//   fetchContactsSuccess,
//   addContactSuccess,
//   deleteContactSuccess,
//   fetchContactsRequest,
//   fetchContactsError,
// } from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { changeFilter } from './contacts-actions';

// const itemsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

// without createAsyncChunk

// const itemsReducer = createReducer([], {
//   [fetchContactsSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [payload, ...state],
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filterReducer = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const isLoading = createReducer(false, {
//   [fetchContactsRequest]: () => true,
//   [fetchContactsSuccess]: () => false,
//   [fetchContactsError]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContactsError]: (_, action) => action.payload,
//   [fetchContactsRequest]: () => null,
// });

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading,
  error,
});
