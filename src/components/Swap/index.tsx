import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 350px;
  padding: ${props => props.theme.spacing[20]};
  background-color: ${props => props.theme.colors.background700};
  border-radius: ${props => props.theme.borderRadius.sm};
`

function Swap() {
  return (
    <Container>

    </Container>
  )
}

export default Swap
