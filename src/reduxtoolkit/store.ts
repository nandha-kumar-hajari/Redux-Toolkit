import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import storage from 'redux-persist/lib/storage';
import {PersistConfig, persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

const Reducers = {
  appData: counterSlice,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(Reducers),
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
