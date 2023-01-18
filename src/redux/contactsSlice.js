import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      return { ...state, isLoading: true };
    },
    [fetchContacts.fulfilled](state, action) {
      return {
        ...state,
        items: [...state.items, action.payload],
        isLoading: false,
        error: null,
      };
    },
    [fetchContacts.rejected](state, action) {
      return { ...state, isLoading: false, error: action.payload };
    },
    [addContact.pending](state) {
      return { ...state, isLoading: true };
    },
    [addContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [...state.items, action.payload],
      };
    },
    [addContact.rejected](state, action) {
      return { ...state, isLoading: false, error: action.payload };
    },
    [deleteContact.pending](state) {
      return { ...state, isLoading: true };
    },
    [deleteContact.fulfilled](state, action) {
      return {
        ...state,
        items: [
          ...state.items.filter(
            ({ name }) =>
              name.toLowerCase() !== action.payload.name.trim().toLowerCase()
          ),
        ],
        isLoading: false,
        error: null,
      };
    },
    [deleteContact.rejected](state, action) {
      return { ...state, isLoading: false, error: action.payload };
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
