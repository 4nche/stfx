import { Percent, Token, TradeType } from "@uniswap/sdk-core"
import { CurrencyAmount, SwapRoute, SwapType } from "@uniswap/smart-order-router"
import { parseUnits } from "ethers"
import { UniswapRouter } from 'services/uniswap'

/**
 * this should be the address which we could get from MetaMask connection (window.ethereum)
 * but since its out of scope I will ignore this for now
 */
const USER_WALLET_ADDRESS = "0x0000000000000000000000000000000000000000";

interface ApiInput {
  inputAmount: number
  inputToken: Token
  outputToken: Token
  slippageTolerance: Percent
}

async function getRoute(input: ApiInput): Promise<SwapRoute> {
  const {
    inputAmount,
    inputToken,
    outputToken,
    slippageTolerance,
  } = input

  const parsedAmount = parseUnits(`${inputAmount}`, inputToken.decimals)

  const route = await UniswapRouter.route(
    CurrencyAmount.fromRawAmount(inputToken, parsedAmount.toString()),
    outputToken,
    TradeType.EXACT_INPUT,
    {
      recipient: USER_WALLET_ADDRESS,
      slippageTolerance,
      type: SwapType.UNIVERSAL_ROUTER,
      deadlineOrPreviousBlockhash: Math.floor(Date.now() / 1000 + 1800),
    }
  )

  if (!route) {
    throw Error('Route could not be fetched')
  }

  return route;
}

export default getRoute
