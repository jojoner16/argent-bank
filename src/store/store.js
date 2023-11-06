import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/login/loginSlice';
import profileSlice from '../features/profile/profileSlice';

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({
  reducer: {
    user: loginSlice,
    profile: profileSlice,
  },

  devTools: reduxDevtools,
});

export default store;
