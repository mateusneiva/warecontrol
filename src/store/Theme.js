import { createSlice } from '@reduxjs/toolkit';

function storageMode() {
  const storage = localStorage.getItem('@App:theme');

  if (!storage) {
    localStorage.setItem('@App:theme', 'light');
    return 'light';
  }

  return storage;
}

export const slice = createSlice({
  name: 'theme',
  initialState: {
    mode: storageMode(),
  },
  reducers: {
    toggleTheme(state, { payload }) {
      if (state.mode === payload) return;

      localStorage.setItem('@App:theme', payload === 'dark' ? 'dark' : 'light');
      return { ...state, mode: payload === 'dark' ? 'dark' : 'light' };
    },
  },
});

export const selectTheme = (state) => state.theme.mode;

export const { toggleTheme } = slice.actions;

export default slice.reducer;
