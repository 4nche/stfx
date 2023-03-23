import config from 'config';
import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`

const TokenLogo = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 0;
  height: 100%;
  background: rgba(255,255,255,0.25);
  width: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
`

const StyledInput = styled.input`
  border: 0;
  width: 100%;
  outline: 0;
  -webkit-appearance: none !important;
  margin: 0;
  font-size: ${props => props.theme.fontSize.lg};
  padding-top: ${props => props.theme.spacing[10]};
  padding-left: ${props => props.theme.spacing[15]};
  padding-bottom: ${props => `calc(${props.theme.spacing[10]} + 2px)`};
  border-radius: ${props => props.theme.borderRadius.sm};
  background-color: ${props => props.theme.colors.background800};
  transition: background-color 0.5s ${props => props.theme.animation.default};

  &:hover:enabled,
  &:active:enabled,
  &:focus:enabled {
    background-color: ${props => props.theme.colors.green50};
  }

  &:disabled {
    color: ${props => props.theme.colors.foreground100};
  }

`

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (newValue: string) => void
  tokenSymbol: string
}

function Input({
  type,
  value,
  onChange,
  tokenSymbol,
  ...inputProps
}: InputProps) {
  const tokenInfo = config.tokens.find((token) => token.symbol === tokenSymbol)

  return (
    <InputContainer>
      <StyledInput
        value={value}
        type={type}
        placeholder=''
        onChange={(ev) => onChange && onChange(ev.target.value)}
        {...inputProps}
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
