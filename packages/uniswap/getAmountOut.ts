import { getQuoteFromRoute } from './routeSelectors'
import getRoute from './getRoute'

/**
 * as per the requirements of the assignment, this pure function
 * can be called which returns the quote provided by Uniswap
 */
async function getAmountOut(input: Parameters<typeof getRoute>[0]): Promise<string> {
  const route = await getRoute(input)

  return getQuoteFromRoute(route)
}

export default getAmountOut
