import { Percent, Token, TradeType } from "@uniswap/sdk-core"
import { AlphaRouter, CurrencyAmount, SwapRoute, SwapType } from "@uniswap/smart-order-router"
import { parseUnits } from "ethers"

interface GetRouteInput {
  inputAmount: string
  inputToken: Token
  outputToken: Token
  slippageTolerance: Percent
  router: AlphaRouter
}

async function getRoute(input: GetRouteInput): Promise<SwapRoute> {
  const {
    inputAmount,
    inputToken,
    outputToken,
    slippageTolerance,
    router,
  } = input

  const parsedAmount = parseUnits(inputAmount, inputToken.decimals)

  const route = await router.route(
    CurrencyAmount.fromRawAmount(inputToken, parsedAmount.toString()),
    outputToken,
    TradeType.EXACT_INPUT,
    {
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
