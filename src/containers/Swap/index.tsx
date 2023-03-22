import { Percent, Token } from '@uniswap/sdk-core'
import { getTokenData } from 'api/helpers/getTokenData'
import Input from 'components/UI/Input'
import { useAppDispatch, useAppSelector } from 'hooks/state'
import React from 'react'
import { fetchUniswapRoute } from 'state/uniswap'
import styled from 'styled-components'
import { devices } from 'styles/theme'

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

function Swap() {
  const [amount, setAmount] = React.useState<string>('')
  const [inputToken, setInputToken] = React.useState<Token>()
  const [outputToken, setOutputToken] = React.useState<Token>()

  const isLoading = useAppSelector((state) => state.uniswap.ui.loading)
  const quote = useAppSelector((state) => state.uniswap.quote)

  const appDispatch = useAppDispatch()

  // because we are not using dynamic input and output tokens I'll fetch them on initialisation of this container
  // but this setup easily allows for dynamic switching of these components and fetching other tokens
  React.useEffect(() => {
    const fetchTokens = async () => {
      const [USDC, COMP] = await Promise.all([
        getTokenData('USDC'),
        getTokenData('COMP')
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
      slippageTolerance: new Percent(2, 100)
    }))
  }


  return (
    <Container>
      <Input
        value={amount}
        onChange={(value) => setAmount(`${value}`)}
        tokenSymbol={inputToken?.symbol || ''}
        disabled={isLoading}
      />
      <button
        onClick={onClickConvert}
      >convert</button>
      <Input
        value={quote || '0'}
        tokenSymbol={outputToken?.symbol || ''}
        disabled={true}
      />
    </Container>
  )
}

export default Swap
