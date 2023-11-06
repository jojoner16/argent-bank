import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/login/loginSlice';

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({
  reducer: {
    user: loginSlice,
  },

  devTools: reduxDevtools,
});

export default store;
