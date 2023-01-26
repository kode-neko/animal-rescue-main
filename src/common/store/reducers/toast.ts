/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import Toast from '../../model/Toast';

const initialState: Toast = {
  open: false,
  type: null,
  msg: '',
};

const reducers = {
  openToast: (state:Toast, action: PayloadAction<Pick<Toast, 'type'| 'msg'>>) => {
    state.open = true;
    state.type = action.payload.type;
    state.msg = action.payload.msg;
  },
  closeToast: (state: Toast) => {
    state.open = false;
    state.type = null;
    state.msg = '';
  },
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers,
});

export default toastSlice;
