import { createSlice } from '@reduxjs/toolkit';

import { REDUX_SLICE_NAME_APP_CONFIG } from '~/constants/constants-redux';

const initialState = {
  navExpanded: false, // Can be one of true or false.
};

const appConfigSlice = createSlice({
  name: REDUX_SLICE_NAME_APP_CONFIG,
  initialState,
  reducers: {
    setNavExpanded(state, action) {
      state.navExpanded = !!action.payload;
    },
  },
});

export const { setNavExpanded } = appConfigSlice.actions;

export default appConfigSlice.reducer;
