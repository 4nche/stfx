import { Fetcher } from "@uniswap/sdk";
import { Token } from '@uniswap/sdk-core'
import { BaseProvider } from "@ethersproject/providers";
import { ChainId } from "@uniswap/sdk";

interface GetTokenDataInput {
  provider: BaseProvider
  token: {
    symbol: string
    address: string
    name: string
    chainId: ChainId
  }
}

async function getTokenData(opts: GetTokenDataInput): Promise<Token | null> {
  const {
    token: tokenInfo,
    provider,
  } = opts

  const token = await Fetcher.fetchTokenData(
    tokenInfo.chainId,
    tokenInfo.address,
    provider,
    tokenInfo.symbol,
    tokenInfo.name
  )

  if (!token) {
    return null
  }

  const returnToken = new Token(
    token.chainId,
    token.address,
    token.decimals,
    token.symbol,
    token.name
  )

  return returnToken
}

export default getTokenData
