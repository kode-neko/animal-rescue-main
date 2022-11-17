/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../model';

const initialState: User = {
  name: '',
  email: '',
  lang: '',
  token: '',
};

const reducers = {
  setUser: (state: User, action: PayloadAction<User>) => {
    state.name = action.payload.name;
    state.email = action.payload.email;
    state.lang = action.payload.lang;
    state.token = action.payload.token;
  },
  setLang: (state: User, action: PayloadAction<Pick<User, 'lang'>>) => {
    state.lang = action.payload.lang;
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
});

export default userSlice;
