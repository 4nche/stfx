# Uniswap API for STFX + Anche

As per the requirements of the assignment, this package has multiple exports used inside my React Application. Two of those are the required `getAmountOut()` and `getPath()` (these aren't used in the React Application, I am happy to explain why later on)

```ts
interface GetRouteInput {
  inputAmount: string
  inputToken: Token
  outputToken: Token
  slippageTolerance: Percent
  router: AlphaRouter
}

interface GetTokenDataInput {
  provider: BaseProvider
  token: {
    symbol: string
    address: string
    name: string
    chainId: ChainId
  }
}

// requirement functions
function getAmountOut(input: GetRouteInput): string
function getPath(input: GetRouteInput): string[]

// exported helpers/internals
function getRoute(input: GetRouteInput): SwapRoute
function getTokenData(input: GetTokenDataInput): Token

interface CreateRouterOptions {
  chainId: ChainId
  provider: BaseProvider
}

function createRouter(input: CreateRouterOptions): AlphaRouter

// selectors (helpful for our React Application)
function getQuoteFromRoute(route: SwapRoute): string
function getPathFromRoute(route: SwapRoute): string[]

