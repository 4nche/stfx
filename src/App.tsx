import Swap from 'components/Swap';
import PageHeader from 'components/UI/PageHeader';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

function App() {
  return (
    <>
      <PageHeader />
      <Container>
        <Swap />
      </Container>
    </>
  );
}

export default App;
