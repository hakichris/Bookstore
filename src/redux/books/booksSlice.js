import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    Addbook: (state, action) => {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      });
    },
    Removebook: (state, action) => {
      state.book.filter((item) => item.item_id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { Addbook, Removebook } = bookSlice.actions;

export default bookSlice.reducer;
