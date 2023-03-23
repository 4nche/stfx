import { createInfuraProvider } from "@stfxanche/uniswap/providers";
import { createRouter } from "@stfxanche/uniswap";
import config from 'config';

const INFURA_API_KEY = process.env.REACT_APP_INFURA_API_KEY

const UniswapProvider = createInfuraProvider({
  apiKey: INFURA_API_KEY,
  chainId: config.chain,
})

const UniswapRouter = createRouter({
  chainId: config.chain,
  provider: UniswapProvider
})
export {
  UniswapProvider,
  UniswapRouter,
}
