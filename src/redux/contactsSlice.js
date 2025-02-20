import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchData } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      // fetchData
      .addCase(fetchData.pending, (state, action) => {
        state.contacts.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
        alert(action.payload);
      })
      // deleteContact
      .addCase(deleteContact.pending, (state, action) => {
        state.contacts.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
        alert(action.payload);
      })
      // addContact
      .addCase(addContact.pending, (state, action) => {
        state.contacts.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
        alert(action.payload);
      });
  },
});

export const selectContacts = state => state.contacts.contacts.items;
export const selectLoading = state => state.contacts.contacts.loading;
export const selectError = state => state.contacts.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (contacts) {
      return contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  }
);

export const contactReducer = slice.reducer;
