import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TNavigationState } from '../../types';

const navigationInitialState: TNavigationState = {
  page: '',
  group: 0,
};

interface TSetNavigationActionPayload {
  page: string;
  group?: number;
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: navigationInitialState,
  reducers: {
    setNavigation: (
      state,
      action: PayloadAction<TSetNavigationActionPayload>,
    ) => {
      if (action.payload.page) {
        state.page = action.payload.page;
      }

      if (action.payload.group) {
        state.group = action.payload.group;
      }
    },
  },
});

export const { setNavigation } = navigationSlice.actions;
