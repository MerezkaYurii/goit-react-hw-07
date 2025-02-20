import { createSlice } from '@reduxjs/toolkit';
import initialContact from '../assets/initialContact.json';
const initialState = {
  contacts: {
    items: initialContact,
  },
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
  },
});

export const contactReducer = slice.reducer;
export const { deleteContact, addContact } = slice.actions;
