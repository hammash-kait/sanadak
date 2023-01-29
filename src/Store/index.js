import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {api} from '../Services/api';
import theme from './Theme';
import user from './User';

const reducers = combineReducers({
  theme,
  user,
  api: api.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme', 'user'], //the api cache will be automatically
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

// custom middleware that handles the data fetching. Both need to be added to the Redux store.
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.REACT_APP_CUSTOM_ENV === 'dev',
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([api.middleware]);

    if (__DEV__) {
      // Debugger tool
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

const persistor = persistStore(store);

// setupListeners : A utility used to enable refetchOnMount and refetchOnReconnect behaviors.
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export {store, persistor};
