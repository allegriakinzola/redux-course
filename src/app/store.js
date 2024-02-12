import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postSlice'
import usersSlice from '../features/users/usersSlice'
import notificationsclice from '../features/notifications/notificationsclice'

export const store = configureStore({
  reducer : {
    posts : postsReducer,
    users : usersSlice,
    notifications : notificationsclice
  }
  
})
