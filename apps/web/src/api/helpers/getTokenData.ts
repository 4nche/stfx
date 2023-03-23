import { Fetcher } from "@uniswap/sdk";
import { Token } from '@uniswap/sdk-core'
import { UniswapProvider } from 'services/uniswap'
import config from 'config';

export async function getTokenData(tokenSymbol: string): Promise<Token | null> {

  const tokenInfo = config.tokens.find(token => token.symbol === tokenSymbol)

  if (!tokenInfo) {
    return null
  }

  /**
   * we have the token data locally, but I like to use the actual source of truth, which is Uniswap
   * so let's fetch the actual token using Uniswap helpers, so we have confirmation of correct data
   */
  const token = await Fetcher.fetchTokenData(
    tokenInfo.chainId,
    tokenInfo.address,
    UniswapProvider,
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
