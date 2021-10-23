import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://61743dee08834f0017c7091c.mockapi.io/api/v1' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
        query: contactId => ({
            url: `/contacts/${contactId}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Contact']
    }),
    addContact: builder.mutation({
        query: newContact => ({
            url: '/contacts',
            method: 'POST',
            body: newContact,
        }),
        invalidatesTags: ['Contact']
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useFetchContactsQuery, 
    useDeleteContactMutation,
    useAddContactMutation
 } = contactsApi;