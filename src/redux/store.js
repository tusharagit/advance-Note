import { configureStore } from '@reduxjs/toolkit'

import demoSlice from './demoSlice'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    demoSlice,
  },
})

export default store;
