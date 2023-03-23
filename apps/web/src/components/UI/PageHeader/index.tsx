import Logo from 'components/Logo'
import React from 'react'
import styled from 'styled-components'

const PageHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.1);
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  padding: ${props => `${props.theme.spacing[10]} ${props.theme.spacing[15]}`};
  font-size: ${props => props.theme.fontSize.xxs};
  font-weight: ${props => props.theme.fontWeight.medium};
  letter-spacing: 0.01rem;

  & div:first-of-type {
    margin-right: ${props => props.theme.spacing[10]};
  }

  & div {
    align-items: center;
    display: flex;
  }
`

function PageHeader() {
  return (
    <PageHeaderContainer>
      <div><Logo /></div>
      <div>STFX + ANCHE</div>
    </PageHeaderContainer>
  )
}

export default PageHeader
