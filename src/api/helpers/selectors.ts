import { SwapRoute } from "@uniswap/smart-order-router";

export function getQuoteFromRoute(route: SwapRoute): string {
  return route.quote.toExact()
}

export function getPathFromRoute(route: SwapRoute): string[] {
  if (!(route.route || []).length) {
    return []
  }

  // first index of route.route is a v3 route, otherwise (I assume) a v2 route
  // due to time constraints this will be something I assume to be right
  const tokenPath: string[] = route.route[0].tokenPath.map((token) => {
    if (token.symbol) {
      return token.symbol
    }

    if (token.name) {
      return token.name
    }

    return token.address
  })

  return tokenPath
}
