import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "rootPersist",
  storage,
  timeout: 500,
}

const rootReducer = combineReducers({ bookSlice })
const reduxPersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: reduxPersistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector