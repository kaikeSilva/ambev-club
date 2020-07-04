import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userSlice } from './userSlice';
import { navigationSlice } from './navigationSlice';

const reducer = combineReducers({
  user: userSlice.reducer,
  navigation: navigationSlice.reducer,
});

export default configureStore({
  reducer,
});
