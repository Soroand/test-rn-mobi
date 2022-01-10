import { configureStore } from '@reduxjs/toolkit'
import comments from './comments/comments.reducer'

export default configureStore({
  reducer: {
    comments
  }
})