import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SwapRoute } from '@uniswap/smart-order-router'
import { getRoute, getPathFromRoute, getQuoteFromRoute } from '@stfxanche/uniswap'


/**
 * although I created the function getAmountOut and getPath, for the UI assignment I believe
 * its better to call the inner getRoute function used by both functions and set that route in the state
 * so that the quote, and the path from 1 single request/response are displayed in the UI
 *
 * calling getPath and getAmountOut separately would provide us with two responses
 * where the path and the quote might be out of sync, thus displaying incorrect data
 *
 * I have thought about ways to create a cache mechanism that would allow me to still use both functions
 * but IMHO it would be overengineering, and I didn't see the point while I could do it much simpler, like this
 */
export const fetchUniswapRoute = createAsyncThunk(
  'uniswap/fetchRoute',
  async (input: Parameters<typeof getRoute>[0], thunkAPI) => {
    const route = await getRoute(input)
    return route
  }
)

interface UniswapState {
  route: SwapRoute | null
  quote: string | null
  swapPath: string[] | null
  ui: {
    loading: boolean
    error: string | null
  }
}

const initialState: UniswapState = {
  route: null,
  quote: null,
  swapPath: null,
  ui: {
    loading: false,
    error: null
  }
}

const uniswapSlice = createSlice({
  initialState,
  name: 'uniswap',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUniswapRoute.pending, (state, action) => {
      state.ui.loading = true
      state.ui.error = null
      state.route = null
      state.quote = null
      state.swapPath = null
    })

    builder.addCase(fetchUniswapRoute.rejected, (state, action) => {
      state.ui.loading = false
      state.ui.error = 'Something went wrong, please try again'
      state.route = null
      state.quote = null
      state.swapPath = null
    })

    builder.addCase(fetchUniswapRoute.fulfilled, (state, action) => {
      state.ui.error = null
      state.ui.loading = false

      state.route = action.payload
      state.quote = getQuoteFromRoute(action.payload)
      state.swapPath = getPathFromRoute(action.payload)
    })
  },
})

export default uniswapSlice
