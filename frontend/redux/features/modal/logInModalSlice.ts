import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store'


interface LoginModalState {
    logInModalState:boolean
  }

  const initialState: LoginModalState = {
    logInModalState:false,
  }

  export const loggedInModalSlice = createSlice({
    name: 'logInModalState',
    initialState,
    reducers: {
        
        openModal:(state) =>{
            state.logInModalState = true
        },
        closeModal:(state) =>{
            state.logInModalState = false
        }
    }
  })
  export const { openModal,closeModal } = loggedInModalSlice.actions
  export const logInModalStatus = (state: RootState) => state.logInModalState.logInModalState
  export default loggedInModalSlice.reducer