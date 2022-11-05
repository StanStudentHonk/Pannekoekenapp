import { createStore } from "redux"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import authReducer from "./authReducer"

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  
const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)