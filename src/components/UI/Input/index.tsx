import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 0;
  background: transparent;
  outline: 0;
  -webkit-appearance: none !important;
  margin: 0;
  font-size: ${props => props.theme.fontSize.xl};
  background-color: ${props => props.theme.colors.background700};
  padding: ${props => `${props.theme.spacing[10]} ${props.theme.spacing[15]}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  transition: background-color 0.5s ${props => props.theme.animation.default};

  &:hover {
    background-color: ${props => props.theme.colors.background600};
  }
`

interface InputProps {
  value: string
  onChange: (newValue: string) => void
}
function Input({
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <StyledInput
        value={value}
        type="number"
        placeholder='0'
        onChange={(ev) => onChange(ev.target.value)}
      />
    </div>
  )
}

export default Input
