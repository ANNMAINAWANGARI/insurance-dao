import { configureStore } from '@reduxjs/toolkit';
import loggedInSlice from './features/login/loggedInSlice';
import logInModalSlice from './features/modal/logInModalSlice';



export const store = configureStore({
    reducer:{
        loggedIn: loggedInSlice,
        logInModalState:logInModalSlice
    }
  })


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch