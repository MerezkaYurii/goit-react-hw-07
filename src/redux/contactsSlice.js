import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchData } from './contactsOps';
import { selectNameFilter } from './filtersSlice';



const initialState = {

    items: [],
    loading: false,
    error: null,

};












const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      // fetchData
      .addCase(fetchData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        alert(action.payload);
      })
      // deleteContact
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          item => {
                 return item.id !== action.payload}
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        alert(action.payload);
      })
      // addContact
      .addCase(addContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        alert(action.payload);
      });
  },
});


export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;




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
