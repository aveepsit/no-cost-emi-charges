import { configureStore } from '@reduxjs/toolkit';

import { REDUX_SLICE_NAME_APP_CONFIG } from '~/constants/constants-redux';

import appConfigReducer from './slices/app-config/appConfigSlice';

const getAppStore = (preloadedState) => {
  const store = configureStore({
    reducer: {
      [REDUX_SLICE_NAME_APP_CONFIG]: appConfigReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });

  return store;
};

export default getAppStore;
