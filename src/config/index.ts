import { ChainId } from '@uniswap/sdk';
import { TokenList } from '@uniswap/token-lists';

interface Config {
  chain: ChainId;
  tokens: TokenList['tokens'];
}

const config: Config = {
  chain: ChainId.MAINNET,
  tokens: [
    {
      chainId: 1,
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      logoURI: process.env.PUBLIC_URL + '/icons/usdc.svg',
    },
    {
      chainId: 1,
      address: '0xc00e94cb662c3520282e6f5717214004a7f26888',
      name: 'Compound',
      symbol: 'COMP',
      decimals: 18,
      logoURI: process.env.PUBLIC_URL + '/icons/comp.svg',
    },
  ],
};

export default config;
