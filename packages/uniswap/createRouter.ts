import { BaseProvider } from "@ethersproject/providers";
import { AlphaRouter, ChainId } from "@uniswap/smart-order-router";

interface CreateRouterOptions {
  chainId: ChainId
  provider: BaseProvider
}

function createRouter(opts: CreateRouterOptions) {
  if (!opts.chainId) {
    throw new Error('Please provide a chainId.')
  }

  if (!opts.provider) {
    throw new Error('Please provide a provider.')
  }

  const router = new AlphaRouter(opts)

  return router;
}

export default createRouter
