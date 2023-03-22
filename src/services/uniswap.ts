import { InfuraProvider } from "@ethersproject/providers";
import { AlphaRouter } from "@uniswap/smart-order-router";
import config from 'config';

const INFURA_API_KEY = process.env.REACT_APP_INFURA_API_KEY

const UniswapProvider = new InfuraProvider(config.chain, INFURA_API_KEY)

const UniswapRouter = new AlphaRouter({
  chainId: config.chain,
  provider: UniswapProvider
});

export {
  UniswapProvider,
  UniswapRouter,
}
