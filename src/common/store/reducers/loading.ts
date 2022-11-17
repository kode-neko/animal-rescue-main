/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loading } from '../../model';

const initialState: Loading = {
  sendingMail: false,
};

const reducers = {
  setSendingMail: (state: Loading, action: PayloadAction<Pick<Loading, 'sendingMail'>>) => {
    state.sendingMail = action.payload.sendingMail;
  },
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers,
});

export default loadingSlice;
