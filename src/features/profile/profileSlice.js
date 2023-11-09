import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: { email: '', firstName: '', lastName: '', userName: '' },
  reducers: {
    setGetProfile: (state, { payload }) => {
      state.email = payload.data.body.email;
      state.firstName = payload.data.body.firstName;
      state.lastName = payload.data.body.lastName;
      state.userName = payload.data.body.userName;
    },
    updateFirstName: (state, { payload }) => {
      state.firstName = payload.newFirstName;
    },
    updateLastName: (state, { payload }) => {
      state.lastName = payload.newLastName;
    },
  },
});

export const { setGetProfile, updateFirstName, updateLastName } =
  profileSlice.actions;
export default profileSlice.reducer;
