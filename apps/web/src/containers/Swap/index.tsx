import { Percent, Token } from '@uniswap/sdk-core'
import { getTokenData } from '@stfxanche/uniswap'
import Spinner from 'components/Spinner'
import SwapPath from 'components/SwapPath'
import Button from 'components/UI/Button'
import Input from 'components/UI/Input'
import { useAppDispatch, useAppSelector } from 'hooks/state'
import React from 'react'
import { fetchUniswapRoute } from 'state/uniswap'
import styled from 'styled-components'
import { devices } from 'styles/theme'
import { UniswapProvider, UniswapRouter } from 'services/uniswap'
import config from 'config'

const Container = styled.div`
  width: 95%;
  @media ${devices['xs<']} {
    width: 80%;
  }

  @media ${devices['sm<']} {
    width: 50%;
  }

  @media ${devices['md<']} {
    width: 40%;
  }

  max-width: 350px;
`

const InputContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing[10]};
  position: relative;
`

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const SpinnerContainer = styled.div`
  position: absolute;
  z-index: 99;
  height: 100%;
  left: ${props => props.theme.spacing[10]};
  align-items: center;
  display: flex;
`

const SwapHeader = styled.div`
  font-size: ${props => props.theme.fontSize.xs};
  margin-bottom: ${props => props.theme.spacing[10]};
  color: ${props => props.theme.colors.green900};
`

const SwapPathContainer = styled.div`
  margin-left: ${props => props.theme.spacing[10]};
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`

function Swap() {
  const [amount, setAmount] = React.useState<string>('')
  const [inputToken, setInputToken] = React.useState<Token>()
  const [outputToken, setOutputToken] = React.useState<Token>()

  const isLoading = useAppSelector((state) => state.uniswap.ui.loading)
  const quote = useAppSelector((state) => state.uniswap.quote)
  const swapPath = useAppSelector((state) => state.uniswap.swapPath)

  const appDispatch = useAppDispatch()

  // because we are not using dynamic input and output tokens I'll fetch them on initialisation of this container
  // but this setup easily allows for dynamic switching of these components and fetching other tokens
  React.useEffect(() => {
    const fetchTokens = async () => {
      // we know this data exists, so for simplicity sake add non-null assertions
      const usdcTokenInfo = config.tokens.find(t => t.symbol === 'USDC')!
      const compTokenInfo = config.tokens.find(t => t.symbol === 'COMP')!

      const [USDC, COMP] = await Promise.all([
        getTokenData({
          provider: UniswapProvider,
          token: usdcTokenInfo,
        }),
        getTokenData({
          provider: UniswapProvider,
          token: compTokenInfo
        })
      ])

      // for simplicity sake I use non-null assertions here
      setInputToken(USDC!)
      setOutputToken(COMP!)
    }

    fetchTokens()
  }, [])

  function onClickConvert() {
    // this should be properly handled in the future
    if (!inputToken || !outputToken) {
      return null
    }

    appDispatch(fetchUniswapRoute({
      inputAmount: amount,
      inputToken,
      outputToken,
      slippageTolerance: new Percent(2, 100),
      router: UniswapRouter,
    }))
  }

  const swapText = inputToken && outputToken ? `${inputToken.symbol} for ${outputToken.symbol}` : ''

  return (
    <Container>
      <SwapHeader>
        {`Swap ${swapText}`}
      </SwapHeader>
      <InputContainer>
        <Input
          placeholder='0'
          type="number"
          value={amount}
          onChange={(value) => setAmount(`${value}`)}
          tokenSymbol={inputToken?.symbol || ''}
          disabled={isLoading}
        />
      </InputContainer>
      <InputContainer>
        <SpinnerContainer>
          <Spinner
            loading={isLoading}
            scale={0.7}
          />
        </SpinnerContainer>
        <Input
          type="text"
          value={quote || ''}
          tokenSymbol={outputToken?.symbol || ''}
          disabled={true}
        />
      </InputContainer>
      <BottomContainer>
        <Button
          disabled={isLoading}
          onClick={onClickConvert}
        >
          convert
        </Button>
        <SwapPathContainer>
          <SwapPath path={swapPath} />
        </SwapPathContainer>
      </BottomContainer>
    </Container>
  )
}

export default Swap
