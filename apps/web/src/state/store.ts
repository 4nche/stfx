import { configureStore } from '@reduxjs/toolkit'
import uniswapSlice from 'state/uniswap'
import logger from 'redux-logger'

const reducers =  {
  [uniswapSlice.name]: uniswapSlice.reducer,
}

export const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      // when working with SSR or persistent state this should be fixed
      serializableCheck: false,
    }).concat(logger)
  },
  devTools: process.env.NODE_ENV !== 'production',
  reducer: reducers,
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
