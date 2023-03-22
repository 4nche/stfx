import Input from 'components/UI/Input'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 350px;
  padding: ${props => props.theme.spacing[20]};
  /* background-color: ${props => props.theme.colors.background700}; */
`

function Swap() {
  const [amount, setAmount] = React.useState<string>('')

  return (
    <Container>
      <Input
        value={amount}
        onChange={setAmount}
      />
    </Container>
  )
}

export default Swap
