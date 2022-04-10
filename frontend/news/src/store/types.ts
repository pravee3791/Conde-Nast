import { Dispatch } from 'redux'


export type Thunk = (
  dispatch: Dispatch<any>,
  getState: () => RootState
) => Promise<any>

export type RootState = ReturnType<any>