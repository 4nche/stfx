import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  border: 0;
  border-radius: ${props => props.theme.borderRadius.xs};
  padding: ${props => `${props.theme.spacing[10]} ${props.theme.spacing[15]}`};
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-size: ${props => props.theme.fontSize.xxs};
  transition: background-color 0.25s ${props => props.theme.animation.default};
  background-color: ${props => props.theme.colors.blue600};
  color: ${props => props.theme.colors.background800};

  &:hover:enabled {
    background-color: ${props => props.theme.colors.blue800};
  }

  &:disabled {
    cursor: not-allowed;
  }
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function Button({
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      {...rest}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
