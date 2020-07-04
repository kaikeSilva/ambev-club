import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUserInitialState } from '../../types';

const userInitialState: TUserInitialState = {
  name: '',
  email: '',
  persona: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setName: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
    setEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
    },
    setPersona: (state, action: PayloadAction<{ persona: number }>) => {
      state.persona = action.payload.persona;
    },
    setUser: (
      state,
      action: PayloadAction<{ name: string; email: string; persona: number }>,
    ) => {
      if (action.payload.name) {
        state.name = action.payload.name;
      }

      if (action.payload.email) {
        state.email = action.payload.email;
      }

      if (action.payload.persona) {
        state.persona = action.payload.persona;
      }
    },
  },
});
