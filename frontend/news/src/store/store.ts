
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { Dispatch } from 'redux'
import appReducer from "./slices/index";


const middlewares = [logger]
const store = configureStore({
    reducer: appReducer,
    middleware: [...getDefaultMiddleware(), ...middlewares]
})

export default store;

// exporting types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type Thunk = (
  dispatch: Dispatch<any>,
  getState: () => RootState
) => Promise<any>