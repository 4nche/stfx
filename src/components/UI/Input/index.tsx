import config from 'config';
import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
  background-color: ${props => props.theme.colors.background700};
  width: 100%;
  transition: background-color 0.5s ${props => props.theme.animation.default};
  border-radius: ${props => props.theme.borderRadius.sm};
  display: flex;
  flex-direction: row;
  position: relative;

  &:hover {
    background-color: ${props => props.theme.colors.background600};
  }
`

const TokenLogo = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 20px;
  top: calc(50% - 12.5px);

`

const StyledInput = styled.input`
  border: 0;
  width: 100%;
  outline: 0;
  -webkit-appearance: none !important;
  margin: 0;
  font-size: ${props => props.theme.fontSize.xl};
  padding-top: ${props => props.theme.spacing[10]};
  padding-left: ${props => props.theme.spacing[15]};
  padding-bottom: ${props => `calc(${props.theme.spacing[10]} + 2px)`};
  background: transparent;
`

interface InputProps {
  value: string
  onChange: (newValue: string) => void
  tokenSymbol: string
}
function Input({
  value,
  onChange,
  tokenSymbol,
}: InputProps) {
  const tokenInfo = config.tokens.find((token) => token.symbol === tokenSymbol)

  return (
    <InputContainer>
      <StyledInput
        value={value}
        type="number"
        placeholder='0'
        onChange={(ev) => onChange(ev.target.value)}
      />
      {tokenInfo?.logoURI && (
        <TokenLogo>
          <img
            src={tokenInfo.logoURI!}
            alt={tokenInfo.name}
            width="25"
            height="25"
          />
        </TokenLogo>
      )}
    </InputContainer>
  )
}

export default Input
