import { ChainId } from "@uniswap/sdk"
import { TokenList,  } from "@uniswap/token-lists"

const defaultTokenList: TokenList = require('@uniswap/default-token-list')

const tokens = defaultTokenList.tokens

interface Config {
  chain: ChainId
  tokens: TokenList['tokens']
}

const config: Config = {
  chain: ChainId.MAINNET,
  tokens,
}

export default config
