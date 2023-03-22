import Input from 'components/UI/Input'
import React from 'react'
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
  /* background-color: ${props => props.theme.colors.background700}; */
`

function Swap() {
  const [amount, setAmount] = React.useState<string>('')

  return (
    <Container>
      <Input
        value={amount}
        onChange={setAmount}
        tokenSymbol="USDC"
      />
    </Container>
  )
}

export default Swap
