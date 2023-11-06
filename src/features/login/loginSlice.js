import { createSlice } from '@reduxjs/toolkit';

const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token') || null;
};

const initialState = {
  token: getTokenFromLocalStorage(),
  dataUser: null,
};

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSignIn(state, { payload }) {
      state.token = payload.dataUser.body?.token;
      state.dataUser = payload.dataUser; // Stocke les données de l'utilisateur lors de la connexion
    },
    setSignOut: (state) => {
      state.token = null;
      state.dataUser = null; // Réinitialise les données de l'utilisateur lors de la déconnexion
    },
  },
});

export const { setSignIn, setSignOut } = loginSlice.actions;

export default loginSlice.reducer;
