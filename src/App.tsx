import Swap from 'components/Swap';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <Container>
      <Swap />
    </Container>
  );
}

export default App;
