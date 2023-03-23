import { ChainId } from "@uniswap/sdk"
import { InfuraProvider } from "@ethersproject/providers"

interface InfuraProviderOptions {
  chainId: ChainId
  apiKey: string
}

function createInfuraProvider(opts: InfuraProviderOptions) {
  if (!opts.chainId) {
    throw new Error('Please provide a chainId.')
  }

  if (!opts.apiKey) {
    throw new Error('Please provide a Infura API Key.')
  }

  return new InfuraProvider(opts.chainId, opts.apiKey)
}

export default createInfuraProvider
