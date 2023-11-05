import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import patientSlice from './slices/patientSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const rootReducer = combineReducers({
  patients: patientSlice,
});

const reduxDebugger = require('redux-flipper').default();

const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([reduxDebugger]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, persistor };
