import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  value: Object;
}

const initialState: UserState = {
  value: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    update: (state, action) => {
      return {
        ...state,
        value: {...state.value, ...action.payload},
      };
    },
    logout: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {login, update, logout} = userSlice.actions;

export default userSlice.reducer;
