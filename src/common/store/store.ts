import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice, toastSlice, loadingSlice } from './reducers';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  toast: toastSlice.reducer,
  loading: loadingSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof store.getState>;

export { store };
export type { RootState };
