import React from 'react'
import styled from 'styled-components'

interface SwapPathProps {
  path: string[] | null
}

const PathContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const TokenContainer = styled.div`
  letter-spacing: 0.05rem;
  font-size: ${props => props.theme.fontSize.xxs};
  background-color: ${props => props.theme.colors.background500};
  color: ${props => props.theme.colors.foreground900};
  border-radius: ${props => props.theme.borderRadius.xs};
  margin-right: 5px;
  padding: ${props => `${props.theme.spacing['1']} ${props.theme.spacing['2.5']}`};
  align-self: flex-start;

  &:last-of-type {
    margin-right: 0;
  }
`


const Arrow = styled.div`
  display: flex;
  align-self: flex-start;
  margin-right: 5px;
  &::before {
    content: '→';
    color: ${props => props.theme.colors.foreground100};
  };
  margin-top: -2px;
`

function SwapPath({
  path,
}: SwapPathProps) {

  const elems: JSX.Element[] = (path || [])?.reduce((acc, token, i) => {

    const tokenElem = (
      <TokenContainer key={`${token + '-' + i}`}>
        {token}
      </TokenContainer>
    )

    const arrow = <Arrow key={`arrow-${i}`} />

    return [
      ...acc,
      tokenElem,
      arrow,
    ]
  }, [] as JSX.Element[])

  if (elems.length) {
    // remove last arrow from elems
    elems.pop()
  }

  return (
    <PathContainer>
      {elems}
    </PathContainer>
  )
}

export default SwapPath
