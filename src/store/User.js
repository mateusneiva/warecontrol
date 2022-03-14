import { createSlice } from '@reduxjs/toolkit';
import { getUserStorage, setUserStorage } from '@/utils/common';

const user = getUserStorage();

export const slice = createSlice({
  name: 'user',
  initialState: {
    isLogged: user.isLogged,
    username: user.username,
  },
  reducers: {
    changeUser(state, { payload }) {
      setUserStorage({ isLogged: true, username: payload });
      return { ...state, isLogged: true, username: payload };
    },
    logout(state) {
      setUserStorage({ isLogged: false, username: '' });
      return { ...state, isLogged: false, username: '' };
    },
  },
});

export const selectUser = (state) => state.user;

export const { changeUser, logout } = slice.actions;

export default slice.reducer;
