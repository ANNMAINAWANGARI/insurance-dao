import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store'


interface LoginState {
    loggedIn:boolean
  }

  const initialState: LoginState = {
    loggedIn:false,
  }

  export const loggedInSlice = createSlice({
    name: 'loggedIn',
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true
          },
        logout: (state) => {
            state.loggedIn = false
          },
    }
  })
  export const { login, logout } = loggedInSlice.actions
  export const loggedInStatus = (state: RootState) => state.loggedIn.loggedIn
  export default loggedInSlice.reducer